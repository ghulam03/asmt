import prisma from "../../prisma/prisma"

export default async function handle(req, res) {
  if (req.method === "POST") {
    const { id,uname,email,phone,company} = req.body;
    await prisma.$connect();
    const result = await prisma.person.create({
      data: {
        id,
        uname,
        email,
        phone,
        company
      },
    });
console.log("person added ",result)
    res.json(result);
  }
  
}
