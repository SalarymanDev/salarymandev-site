import { auth } from "~/server/auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await auth();
  if (!session) redirect("/api/auth/signin");

  return <></>;
}
