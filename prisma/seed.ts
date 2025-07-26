import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Clean up any existing test data
  await prisma.user.deleteMany({
    where: { email: 'admin@example.com' }
  })
  await prisma.tenant.deleteMany({
    where: { slug: 'test-tenant' }
  })

  try {
    // Create a test tenant
    const tenant = await prisma.tenant.create({
      data: {
        name: 'Test Tenant',
        slug: 'test-tenant',
        settings: {}
      }
    })

    // Create a test admin user
    await prisma.user.create({
      data: {
        email: 'admin@example.com',
        name: 'Admin User',
        role: 'ADMIN',
        tenantId: tenant.id,
        password: await bcrypt.hash('password123', 10)
      }
    })

    console.log('Test data seeded successfully')
  } catch (error) {
    console.error('Error seeding test data:', error)
    process.exit(1)
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
