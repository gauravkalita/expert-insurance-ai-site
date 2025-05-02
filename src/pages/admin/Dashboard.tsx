
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { FileText, FolderOpen, Settings, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AdminLayout from '@/components/admin/AdminLayout';
import { supabase } from '@/lib/supabase';

const Dashboard = () => {
  const navigate = useNavigate();
  
  const { data: stats, isLoading } = useQuery({
    queryKey: ['adminStats'],
    queryFn: async () => {
      // Get post count
      const { count: postCount, error: postError } = await supabase
        .from('posts')
        .select('*', { count: 'exact', head: true });
      
      if (postError) throw postError;
      
      // Get category count
      const { count: categoryCount, error: categoryError } = await supabase
        .from('categories')
        .select('*', { count: 'exact', head: true });
      
      if (categoryError) throw categoryError;
      
      // Get user data
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      
      if (userError) throw userError;
      
      return {
        postCount: postCount || 0,
        categoryCount: categoryCount || 0,
        user,
      };
    },
  });
  
  const dashboardCards = [
    {
      title: 'Posts',
      count: stats?.postCount || 0,
      icon: <FileText className="h-6 w-6 text-primary" />,
      link: '/admin/posts',
      addLink: '/admin/posts/new',
      loading: isLoading,
    },
    {
      title: 'Categories',
      count: stats?.categoryCount || 0,
      icon: <FolderOpen className="h-6 w-6 text-secondary" />,
      link: '/admin/categories',
      addLink: '/admin/categories/new',
      loading: isLoading,
    },
    {
      title: 'Settings',
      icon: <Settings className="h-6 w-6 text-gray-600" />,
      link: '/admin/settings',
      loading: isLoading,
    },
  ];
  
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Welcome back, {stats?.user?.email}
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dashboardCards.map((card, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">{card.icon}</div>
                  <div className="ml-5 w-0 flex-1">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {card.title}
                    </dt>
                    {'count' in card && (
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">
                          {card.loading ? '...' : card.count}
                        </div>
                      </dd>
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="flex justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary"
                    onClick={() => navigate(card.link)}
                  >
                    View all
                  </Button>
                  {card.addLink && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary"
                      onClick={() => navigate(card.addLink)}
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add new
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
