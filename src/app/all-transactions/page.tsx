import prisma from "@/db";
export default async function AllTransaction() {
  const user = await prisma.user.findUnique({
    where: {
      id: "clzoheuoy0000zf56yv81w3bj",
    },
    include: {
      transactions: true,
    },
  });

  return (
    <>
      {user?.transactions.map((t) => {
        return <h1>{t.title}</h1>;
      })}
    </>
  );
}
