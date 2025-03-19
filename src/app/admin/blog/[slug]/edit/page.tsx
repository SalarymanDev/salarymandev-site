import { auth } from "~/server/auth";
import { redirect } from "next/navigation";

export default async function AdminBlogPostEditPage({
  params,
}: {
  params: Promise<{ slug: number }>;
}) {
  const session = await auth();
  if (!session) redirect("/api/auth/signin");
  const { slug } = await params;

  return <></>;
}
