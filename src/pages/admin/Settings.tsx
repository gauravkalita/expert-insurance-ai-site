
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
import { supabase } from '@/lib/supabase';
import AdminLayout from '@/components/admin/AdminLayout';
import { useQuery } from '@tanstack/react-query';

interface SettingItem {
  key: string;
  value: string;
}

const Settings = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const { data: settings, isLoading, refetch } = useQuery({
    queryKey: ['adminSettings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('settings')
        .select('*');
      
      if (error) throw error;
      
      // Convert to key-value object
      const settingsObj: Record<string, string> = {};
      (data || []).forEach((setting: SettingItem) => {
        settingsObj[setting.key] = setting.value;
      });
      
      return settingsObj;
    },
  });
  
  const form = useForm({
    defaultValues: {
      site_title: '',
      site_description: '',
      posts_per_page: '10',
      site_email: '',
    },
  });
  
  // Set form values when settings load
  React.useEffect(() => {
    if (settings) {
      form.reset({
        site_title: settings.site_title || '',
        site_description: settings.site_description || '',
        posts_per_page: settings.posts_per_page || '10',
        site_email: settings.site_email || '',
      });
    }
  }, [settings, form]);
  
  const onSubmit = async (data: Record<string, string>) => {
    try {
      setIsSubmitting(true);
      
      // Convert object back to array for upsert
      const settingsToUpdate = Object.entries(data).map(([key, value]) => ({
        key,
        value: String(value),
      }));
      
      // Upsert settings
      const { error } = await supabase
        .from('settings')
        .upsert(
          settingsToUpdate.map((setting) => ({
            key: setting.key,
            value: setting.value,
          })),
          { onConflict: 'key' }
        );
      
      if (error) throw error;
      
      toast({
        title: 'Settings saved',
        description: 'Your settings have been updated successfully.',
      });
      
      refetch();
    } catch (error: any) {
      console.error('Error saving settings:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to save settings. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Settings</h1>
          <p className="text-gray-600 mt-1">
            Configure your blog settings
          </p>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-6">
          {isLoading ? (
            <div className="py-4">Loading settings...</div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="site_title"
                  rules={{ required: 'Site title is required' }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Site Title</FormLabel>
                      <FormControl>
                        <Input placeholder="My Blog" {...field} />
                      </FormControl>
                      <FormDescription>
                        The name of your blog
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="site_description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Site Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="A short description of your blog"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        A brief description for SEO and social sharing
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="posts_per_page"
                    rules={{ required: 'This field is required' }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Posts Per Page</FormLabel>
                        <FormControl>
                          <Input type="number" min="1" max="50" {...field} />
                        </FormControl>
                        <FormDescription>
                          Number of posts to display per page
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="site_email"
                    rules={{ 
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="contact@example.com" {...field} />
                        </FormControl>
                        <FormDescription>
                          Email for contact forms and notifications
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="flex justify-end">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Saving...' : 'Save Settings'}
                  </Button>
                </div>
              </form>
            </Form>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Settings;
