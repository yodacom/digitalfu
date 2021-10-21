import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

module.exports = async (req, res) => {
  try {
    const { email } = JSON.parse(req.body)
    const { user = await prisma.user.create({
      data: { email },
    })
    console.log('created user')
  } catch (err) {
    console.log(err)
  } finally {
  await prisma.$disconnect()
  res.send({ received: true })
    }
  }
  // need to send a res.send so the hook receives a 200 status code and can keep going with the sign in process
async function (user, context, callback ) {
  await request.post('https://0d4d01c96799.au.ngrok.io/api/auth/hooks', {
    body: JSON.stringify({
      email: user.email,
    })
  });
  callback(null, user, context);
}