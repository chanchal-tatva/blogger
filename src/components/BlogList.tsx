"use client"
import { useQuery } from '@apollo/client';
import { GET_BLOGS } from '@/lib/queries';
import { Blog } from '@/types/blog';
import { BlogCard } from './BlogCard';

export const BlogList = () => {
  const { loading, error, data } = useQuery(GET_BLOGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const blogs: Blog[] = data.posts.edges.map((edge: any) => edge.node);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};
