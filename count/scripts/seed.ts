import { db } from '../src/db'
import { users, goals } from '../src/db/schema'
import bcrypt from 'bcryptjs'
import { eq } from 'drizzle-orm'

async function seed() {
  const adminEmail = process.env.ADMIN_EMAIL
  if (!adminEmail) {
    console.error('ADMIN_EMAIL env var is required')
    process.exit(1)
  }

  // Check if admin already exists
  const existing = await db
    .select()
    .from(users)
    .where(eq(users.email, adminEmail))
    .limit(1)

  if (existing.length > 0) {
    // Update role to admin
    await db
      .update(users)
      .set({ role: 'admin' })
      .where(eq(users.email, adminEmail))
    console.log(`✅ Updated ${adminEmail} to admin role`)
  } else {
    // Create admin user
    const password = process.env.ADMIN_PASSWORD || 'Admin@1234!'
    const hash = await bcrypt.hash(password, 12)
    const [admin] = await db
      .insert(users)
      .values({
        name: 'Admin',
        email: adminEmail,
        passwordHash: hash,
        role: 'admin',
      })
      .returning()

    // Create default goal
    await db.insert(goals).values({
      userId: admin.id,
      targetStreakDays: 7,
    })

    console.log(`✅ Created admin user: ${adminEmail}`)
    console.log(`   Default password: ${password}`)
    console.log(`   ⚠️  Change the password immediately!`)
  }

  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
