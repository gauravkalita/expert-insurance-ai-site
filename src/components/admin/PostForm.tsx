
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import slugify from 'slugify';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import RichTextEditor from './RichTextEditor';

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface PostFormProps {
  initialData?: {
    id?: string;
    title?: string;
    slug?: string;
    content?: string;
    category_id?: number;
    featured_image?: string;
  };
  categories: Category[];
  onSuccess?: () => void;
}

const PostForm = ({ initialData, categories, onSuccess }: PostFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [content, setContent] = useState(initialData?.content || '');
  const [featuredImage, setFeaturedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(initialData?.featured_image || null);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const form = useForm({
    defaultValues: {
      title: initialData?.title || '',
      category_id: initialData?.category_id || '',
    },
  });
  
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    setFeaturedImage(file);
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
  };
  
  const uploadImage = async (file: File): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
    const filePath = `blog/${fileName}`;
    
    const { data, error } = await supabase.storage
      .from('blog-images')
      .upload(filePath, file);
      
    if (error) {
      throw error;
    }
    
    const { data: urlData } = supabase.storage
      .from('blog-images')
      .getPublicUrl(filePath);
      
    return urlData.publicUrl;
  };
  
  const handleImageUploadForEditor = async (file: File): Promise<string> => {
    try {
      return await uploadImage(file);
    } catch (error) {
      console.error('Failed to upload image:', error);
      toast({
        title: 'Upload failed',
        description: 'Failed to upload image. Please try again.',
        variant: 'destructive',
      });
      throw error;
    }
  };
  
  const onSubmit = async (data: any) => {
    try {
      setIsSubmitting(true);
      
      if (!content) {
        toast({
          title: 'Content required',
          description: 'Please add some content to your post.',
          variant: 'destructive',
        });
        setIsSubmitting(false);
        return;
      }
      
      // Generate slug from title
      const slug = initialData?.slug || slugify(data.title, { lower: true, strict: true });
      
      // Upload featured image if new one was selected
      let imageUrl = initialData?.featured_image || null;
      if (featuredImage) {
        try {
          imageUrl = await uploadImage(featuredImage);
        } catch (error) {
          console.error('Failed to upload featured image:', error);
          toast({
            title: 'Upload failed',
            description: 'Failed to upload featured image. Please try again.',
            variant: 'destructive',
          });
          setIsSubmitting(false);
          return;
        }
      }
      
      // Prepare post data
      const postData = {
        title: data.title,
        slug,
        content,
        category_id: data.category_id,
        featured_image: imageUrl,
        updated_at: new Date().toISOString(),
      };
      
      if (!initialData?.id) {
        // Create new post
        const { data: post, error } = await supabase
          .from('posts')
          .insert([{ ...postData, created_at: new Date().toISOString() }])
          .select()
          .single();
          
        if (error) throw error;
        
        toast({
          title: 'Post created',
          description: 'Your post has been successfully created.',
        });
      } else {
        // Update existing post
        const { error } = await supabase
          .from('posts')
          .update(postData)
          .eq('id', initialData.id);
          
        if (error) throw error;
        
        toast({
          title: 'Post updated',
          description: 'Your post has been successfully updated.',
        });
      }
      
      if (onSuccess) {
        onSuccess();
      } else {
        navigate('/admin/posts');
      }
    } catch (error: any) {
      console.error('Error saving post:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to save post. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          rules={{ required: 'Title is required' }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Post title" {...field} />
              </FormControl>
              <FormDescription>
                The title of your blog post. This will also generate the slug.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="category_id"
          rules={{ required: 'Category is required' }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select 
                value={String(field.value)} 
                onValueChange={(value) => field.onChange(Number(value))}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={String(category.id)}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="space-y-2">
          <FormLabel>Featured Image</FormLabel>
          <div className="flex items-center space-x-4">
            <Input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange}
              className="max-w-sm" 
            />
            {previewUrl && (
              <div className="relative w-24 h-24 rounded overflow-hidden">
                <img 
                  src={previewUrl} 
                  alt="Preview" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
          <FormDescription>
            Upload a featured image for your post.
          </FormDescription>
        </div>
        
        <div className="space-y-2">
          <FormLabel>Content</FormLabel>
          <RichTextEditor 
            content={content} 
            onChange={setContent} 
            onImageUpload={handleImageUploadForEditor}
          />
          <FormDescription>
            Write the content of your blog post.
          </FormDescription>
        </div>
        
        <div className="flex justify-end space-x-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => navigate('/admin/posts')}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : initialData?.id ? 'Update Post' : 'Create Post'}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PostForm;
