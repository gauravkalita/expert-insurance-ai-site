
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import Index from './pages/Index';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import CategoryPage from './pages/CategoryPage';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import Tools from './pages/Tools';
import Sitemap from './pages/Sitemap';
import Login from './pages/admin/Login';
import Register from './pages/admin/Register';
import Dashboard from './pages/admin/Dashboard';
import Posts from './pages/admin/Posts';
import Categories from './pages/admin/Categories';
import NewPost from './pages/admin/NewPost';
import EditPost from './pages/admin/EditPost';
import NewCategory from './pages/admin/NewCategory';
import EditCategory from './pages/admin/EditCategory';
import Settings from './pages/admin/Settings';
import './App.css';

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
