const { createClient } = require("@supabase/supabase-js")
const fs = require("fs")
const path = require("path")

async function setupDatabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error("Missing Supabase environment variables")
    process.exit(1)
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })

  try {
    console.log("🚀 Setting up database...")

    // Read and execute SQL files
    const sqlFiles = ["001-create-tables.sql", "002-seed-data.sql", "003-rls-policies.sql"]

    for (const file of sqlFiles) {
      console.log(`📄 Executing ${file}...`)
      const sqlPath = path.join(__dirname, file)
      const sql = fs.readFileSync(sqlPath, "utf8")

      const { error } = await supabase.rpc("exec_sql", { sql })

      if (error) {
        console.error(`❌ Error executing ${file}:`, error)
      } else {
        console.log(`✅ Successfully executed ${file}`)
      }
    }

    console.log("🎉 Database setup completed!")
  } catch (error) {
    console.error("❌ Database setup failed:", error)
    process.exit(1)
  }
}

setupDatabase()
