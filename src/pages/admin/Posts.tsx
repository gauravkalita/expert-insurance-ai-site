
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AdminLayout from '@/components/admin/AdminLayout';
import PostList from '@/components/admin/PostList';
import { supabase } from '@/lib/supabase';

const Posts = () => {
  const navigate = useNavigate();
  
  const {
    data: posts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['adminPosts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('posts')
        .select(`
          *,
          category:category_id (
            name
          )
        `)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      return data || [];
    },
  });
  
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Posts</h1>
          <Button onClick={() => navigate('/admin/posts/new')}>
            <Plus className="h-4 w-4 mr-1" />
            New Post
          </Button>
        </div>
        
        <PostList
          posts={posts || []}
          onDelete={() => refetch()}
          isLoading={isLoading}
        />
      </div>
    </AdminLayout>
  );
};

export default Posts;
