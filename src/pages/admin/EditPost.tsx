
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import AdminLayout from '@/components/admin/AdminLayout';
import PostForm from '@/components/admin/PostForm';
import { StepProgress } from '@/components/ui/step-progress';
import { supabase } from '@/lib/supabase';

const EditPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const { data: post, isLoading: isLoadingPost } = useQuery({
    queryKey: ['adminPost', id],
    queryFn: async () => {
      if (!id) return null;
      
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      
      return data;
    },
    enabled: !!id,
  });
  
  const { data: categories, isLoading: isLoadingCategories } = useQuery({
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
  
  const isLoading = isLoadingPost || isLoadingCategories;
  
  if (isLoading) {
    return (
      <AdminLayout>
        <div className="py-8">
          <StepProgress currentStep={1} totalSteps={1} label={false} />
        </div>
      </AdminLayout>
    );
  }
  
  if (!post) {
    return (
      <AdminLayout>
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold">Post not found</h2>
          <p className="text-gray-600 mt-2">The post you're trying to edit doesn't exist.</p>
          <button
            onClick={() => navigate('/admin/posts')}
            className="mt-4 text-primary hover:underline"
          >
            Back to posts
          </button>
        </div>
      </AdminLayout>
    );
  }
  
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Edit Post</h1>
          <p className="text-gray-600 mt-1">
            Make changes to your post
          </p>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-6">
          <PostForm
            initialData={post}
            categories={categories || []}
            onSuccess={() => navigate('/admin/posts')}
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export default EditPost;
