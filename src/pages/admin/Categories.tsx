
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AdminLayout from '@/components/admin/AdminLayout';
import CategoryList from '@/components/admin/CategoryList';
import { supabase } from '@/lib/supabase';

const Categories = () => {
  const navigate = useNavigate();
  
  const {
    data: categories,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['adminCategoriesWithCounts'],
    queryFn: async () => {
      // First get all categories
      const { data: categoriesData, error: categoriesError } = await supabase
        .from('categories')
        .select('*')
        .order('name');
      
      if (categoriesError) throw categoriesError;
      
      // Get post counts for each category
      const categoriesWithCounts = await Promise.all(
        (categoriesData || []).map(async (category) => {
          const { count, error: countError } = await supabase
            .from('posts')
            .select('*', { count: 'exact', head: true })
            .eq('category_id', category.id);
          
          if (countError) throw countError;
          
          return {
            ...category,
            post_count: count || 0,
          };
        })
      );
      
      return categoriesWithCounts;
    },
  });
  
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Categories</h1>
          <Button onClick={() => navigate('/admin/categories/new')}>
            <Plus className="h-4 w-4 mr-1" />
            New Category
          </Button>
        </div>
        
        <CategoryList
          categories={categories || []}
          onDelete={() => refetch()}
          isLoading={isLoading}
        />
      </div>
    </AdminLayout>
  );
};

export default Categories;
