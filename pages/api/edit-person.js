import prisma from "../../prisma/prisma"

export default async function handle(req, res) {
  if (req.method === "POST") {
    const { uname,email,phone,company} = req.body;
    await prisma.$connect();
    const result = await prisma.person.update({
        where:{
            email
        },
      data: {
        uname,
        phone,
        company
      },
    });
console.log("person edited ",result)
    res.json(result);
  }
  
}
