import prisma from "@/db";

export default async function Home() {
  const users = await prisma.user.findMany();
  return (
    <>
      {users.map((user) => {
        return <h1>{user.id}</h1>;
      })}
    </>
  );
}
