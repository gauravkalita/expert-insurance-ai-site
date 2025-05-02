
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '@/components/admin/AdminLayout';
import PostForm from '@/components/admin/PostForm';
import { StepProgress } from '@/components/ui/step-progress';
import { supabase } from '@/lib/supabase';

const NewPost = () => {
  const navigate = useNavigate();
  
  const { data: categories, isLoading } = useQuery({
    queryKey: ['adminCategories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');
      
      if (error) throw error;
      
      return data || [];
    },
  });
  
  if (isLoading) {
    return (
      <AdminLayout>
        <div className="py-8">
          <StepProgress currentStep={1} totalSteps={1} label={false} />
        </div>
      </AdminLayout>
    );
  }
  
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Create New Post</h1>
          <p className="text-gray-600 mt-1">
            Add a new post to your blog
          </p>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-6">
          <PostForm
            categories={categories || []}
            onSuccess={() => navigate('/admin/posts')}
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export default NewPost;
