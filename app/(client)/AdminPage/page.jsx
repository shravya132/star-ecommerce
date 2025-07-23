import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

async function AdminPage() {
  const user = await currentUser();
  if (!user) redirect("/");

  console.log("User:", user);
  console.log("Role:", user?.publicMetadata?.role);

  if (user?.publicMetadata?.role !== "admin") {
    redirect("/");
  }

  return (
    <div>
      <div>ADMIN</div>
    </div>
  );
}

export default AdminPage;
