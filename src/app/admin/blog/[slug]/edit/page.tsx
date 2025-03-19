import BlogPostEditor from "~/app/_components/BlogPostEditor";

export default async function AdminBlogPostEditPage({
  params,
}: {
  params: Promise<{ slug: number }>;
}) {
  const { slug } = await params;

  return <BlogPostEditor />;
}
