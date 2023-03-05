import prisma from "../../prisma/prisma"

export default async function handle(req, res) {
  if (req.method === "POST") {
    const { id,uname, password} = req.body;
    await prisma.$connect();
    const result = await prisma.user.create({
      data: {
        id,
        uname,
        password,
      },
    });
console.log("user sign up ",result)
    res.json(result);
  }
  
}
