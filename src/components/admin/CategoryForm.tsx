
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
import { useToast } from '@/hooks/use-toast';

interface CategoryFormProps {
  initialData?: {
    id?: number;
    name?: string;
    slug?: string;
    description?: string;
  };
  onSuccess?: () => void;
}

const CategoryForm = ({ initialData, onSuccess }: CategoryFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const form = useForm({
    defaultValues: {
      name: initialData?.name || '',
      description: initialData?.description || '',
    },
  });
  
  const onSubmit = async (data: any) => {
    try {
      setIsSubmitting(true);
      
      // Generate slug from name
      const slug = initialData?.slug || slugify(data.name, { lower: true, strict: true });
      
      // Prepare category data
      const categoryData = {
        name: data.name,
        slug,
        description: data.description,
        updated_at: new Date().toISOString(),
      };
      
      if (!initialData?.id) {
        // Create new category
        const { data: category, error } = await supabase
          .from('categories')
          .insert([{ ...categoryData, created_at: new Date().toISOString() }])
          .select()
          .single();
          
        if (error) throw error;
        
        toast({
          title: 'Category created',
          description: 'Your category has been successfully created.',
        });
      } else {
        // Update existing category
        const { error } = await supabase
          .from('categories')
          .update(categoryData)
          .eq('id', initialData.id);
          
        if (error) throw error;
        
        toast({
          title: 'Category updated',
          description: 'Your category has been successfully updated.',
        });
      }
      
      if (onSuccess) {
        onSuccess();
      } else {
        navigate('/admin/categories');
      }
    } catch (error: any) {
      console.error('Error saving category:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to save category. Please try again.',
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
          name="name"
          rules={{ required: 'Name is required' }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Category name" {...field} />
              </FormControl>
              <FormDescription>
                The name of your category. This will also generate the slug.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Category description (optional)" {...field} />
              </FormControl>
              <FormDescription>
                A short description of the category.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="flex justify-end space-x-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => navigate('/admin/categories')}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : initialData?.id ? 'Update Category' : 'Create Category'}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CategoryForm;
