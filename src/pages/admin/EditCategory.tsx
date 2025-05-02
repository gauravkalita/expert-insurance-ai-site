
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import AdminLayout from '@/components/admin/AdminLayout';
import CategoryForm from '@/components/admin/CategoryForm';
import { StepProgress } from '@/components/ui/step-progress';
import { supabase } from '@/lib/supabase';

const EditCategory = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const { data: category, isLoading } = useQuery({
    queryKey: ['adminCategory', id],
    queryFn: async () => {
      if (!id) return null;
      
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      
      return data;
    },
    enabled: !!id,
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
  
  if (!category) {
    return (
      <AdminLayout>
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold">Category not found</h2>
          <p className="text-gray-600 mt-2">The category you're trying to edit doesn't exist.</p>
          <button
            onClick={() => navigate('/admin/categories')}
            className="mt-4 text-primary hover:underline"
          >
            Back to categories
          </button>
        </div>
      </AdminLayout>
    );
  }
  
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Edit Category</h1>
          <p className="text-gray-600 mt-1">
            Update category details
          </p>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-6">
          <CategoryForm
            initialData={category}
            onSuccess={() => navigate('/admin/categories')}
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export default EditCategory;
