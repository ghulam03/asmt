import prisma from "../../prisma/prisma"

export default async function handle(req, res) {
    const email=req.query.email
    await prisma.$connect();
    const result = await prisma.person.delete({
      where: {
        email
        
      },
    });
console.log("person deleted ",result)
    res.json(result);
  
  
}
