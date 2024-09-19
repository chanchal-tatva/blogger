import { BlogList } from "@/components/BlogList";

export default function BlogPage() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <BlogList />
    </main>
  );
}
