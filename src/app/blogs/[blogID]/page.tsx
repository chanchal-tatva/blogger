
import client from '@/lib/graphql-client';
import { GET_BLOG_BY_SLUG } from '@/lib/queries';
import { BlogPost } from '@/types/blog';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { data } = await client.query({
    query: GET_BLOG_BY_SLUG,
    variables: { slug: params.slug },
  });

  if (!data.postBy) {
    notFound();
  }

  const post: BlogPost = data.postBy;

  return (
    <article className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600">{new Date(post.date).toLocaleDateString()}</p>
      <div className="mt-6 prose prose-lg" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
