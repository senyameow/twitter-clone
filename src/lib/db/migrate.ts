import { Pool } from 'pg'
import 'dotenv/config'
import { drizzle } from 'drizzle-orm/node-postgres'
import { migrate } from 'drizzle-orm/node-postgres/migrator'
import * as schema from './schema'

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
})

const db = drizzle(pool, {
    schema
})

const main = async () => {
    console.log('start')
    await migrate(db, { migrationsFolder: 'drizzle' })
    console.log('ended')
    process.exit(0)
}

main()
    .catch(err => {
        console.log(err)
        process.exit(0)
    })