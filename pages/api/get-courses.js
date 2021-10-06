import { PrismaClient } from '@prisma/client'
import { async } from 'regenerator-runtime'
const prisma = new PrismaClient()

module.exports = async (req, res) => {
  const courses = await prisma.course.findMany({
    include: {
      lessons: true,
    },
  })
  res.send(courses)
}