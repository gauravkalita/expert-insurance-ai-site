
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '@/components/admin/AdminLayout';
import CategoryForm from '@/components/admin/CategoryForm';

const NewCategory = () => {
  const navigate = useNavigate();
  
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Create New Category</h1>
          <p className="text-gray-600 mt-1">
            Add a new category to organize your posts
          </p>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-6">
          <CategoryForm onSuccess={() => navigate('/admin/categories')} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default NewCategory;
