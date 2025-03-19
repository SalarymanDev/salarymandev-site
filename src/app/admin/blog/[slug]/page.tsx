export default async function AdminBlogPostViewPage({
  params,
}: {
  params: Promise<{ slug: number }>;
}) {
  const { slug } = await params;
  return <p>Post: {slug}</p>;
}
