// src/components/BlogCard.tsx

import { Blog } from '@/types/blog';
import Link from 'next/link';

interface BlogCardProps {
  blog: Blog;
}

export const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div className="p-4 border rounded-lg hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
      <p>{blog.excerpt}</p>
      <Link href={`/blog/${blog.slug}`} className="text-blue-500 mt-4 block">
        Read More
      </Link>
    </div>
  );
};
