import { PrismaClient } from '@prisma/client'
import { USERS_SEED_DATA } from './seed-data'

const prisma = new PrismaClient()

async function main() {
  await Promise.all(
    USERS_SEED_DATA.map(async (user) => {
      return prisma.user.upsert({
        where: { id: user.id },
        create: user,
        update: user
      })
    })
  )
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (err) => {
    console.error(err)
    await prisma.$disconnect()
  })
