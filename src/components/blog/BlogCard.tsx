
import React from "react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    date: string;
    readTime: string;
    slug: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  // Extract image name for WebP conversion
  const getWebPUrl = (url: string) => {
    // Convert to WebP if it's an unsplash URL
    if (url.includes('unsplash.com')) {
      return `${url}&fm=webp`;
    }
    return url;
  };

  return (
    <Link 
      to={`/blog/${post.slug}`}
      className="group hover:scale-[1.02] transition-transform duration-300"
      aria-labelledby={`blog-title-${post.id}`}
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <picture>
            <source srcSet={getWebPUrl(post.image)} type="image/webp" />
            <img 
              src={post.image} 
              alt={`Featured image for article: ${post.title}`} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              width="400" 
              height="225"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = '/placeholder.svg';
              }}
            />
          </picture>
          <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold py-1 px-2 rounded">
            {post.category}
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
          <h3 
            id={`blog-title-${post.id}`}
            className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300"
          >
            {post.title}
          </h3>
          <p className="text-gray-600 mb-4 flex-grow">
            {post.excerpt}
          </p>
          <span className="text-primary font-medium inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
            Read more
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
