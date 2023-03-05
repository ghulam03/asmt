import prisma from "../../prisma/prisma"

export default async function handle(req, res) {
  if (req.method === "POST") {
    const { uname, password} = req.body;
    await prisma.$connect();
    const result = await prisma.user.findUnique({
      where: {
        uname,
      },
    });
console.log("user sign ",result)
    res.json(result);
  }
  
}
