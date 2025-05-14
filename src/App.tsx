
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import CookieConsent from './components/shared/CookieConsent';
import Index from './pages/Index';

// Lazy load non-critical routes for performance
const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const Contact = lazy(() => import('./pages/Contact'));
const Resources = lazy(() => import('./pages/Resources'));
const Tools = lazy(() => import('./pages/Tools'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const Login = lazy(() => import('./pages/admin/Login'));
const Register = lazy(() => import('./pages/admin/Register'));
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const Posts = lazy(() => import('./pages/admin/Posts'));
const Categories = lazy(() => import('./pages/admin/Categories'));
const NewPost = lazy(() => import('./pages/admin/NewPost'));
const EditPost = lazy(() => import('./pages/admin/EditPost'));
const NewCategory = lazy(() => import('./pages/admin/NewCategory'));
const EditCategory = lazy(() => import('./pages/admin/EditCategory'));
const Settings = lazy(() => import('./pages/admin/Settings'));

import './App.css';

// Create Privacy Policy page component
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy')); 
// Create Terms of Service page component
const TermsOfService = lazy(() => import('./pages/legal/TermsOfService')); 

// Initialize React Query client with improved settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      retry: 1, // Only retry once on failure
      refetchOnWindowFocus: false, // Don't refetch when window regains focus
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/register" element={<Register />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/posts" element={<Posts />} />
            <Route path="/admin/posts/new" element={<NewPost />} />
            <Route path="/admin/posts/edit/:id" element={<EditPost />} />
            <Route path="/admin/categories" element={<Categories />} />
            <Route path="/admin/categories/new" element={<NewCategory />} />
            <Route path="/admin/categories/edit/:id" element={<EditCategory />} />
            <Route path="/admin/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        
        {/* Cookie consent banner */}
        <CookieConsent />
        
        {/* Improved toast notifications */}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            className: "shadow-lg rounded-md",
            style: {
              padding: '12px',
              border: '1px solid var(--border)',
              backgroundColor: 'var(--background)',
              color: 'var(--foreground)',
              fontSize: '14px'
            }
          }}
        />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
