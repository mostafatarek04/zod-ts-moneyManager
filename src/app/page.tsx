import prisma from "@/db";

export default async function Home() {
  const newTest = await prisma.test.create({
    data: {
      title: "sisis",
    },
  });
  console.log(newTest);

  return (
    <>
      <h1>This is Home page</h1>
    </>
  );
}
