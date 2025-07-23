import { query } from './db';
import { createUser } from './auth';
import fs from 'fs';
import path from 'path';

/**
 * Initialize database tables and seed data
 */
export async function initializeDatabase() {
  try {
    console.log('Initializing database...');
    
    // Read schema SQL file
    const schemaPath = path.join(process.cwd(), 'lib', 'schema.sql');
    const schemaSql = fs.readFileSync(schemaPath, 'utf8');
    
    // Execute schema SQL
    await query(schemaSql);
    console.log('Database schema created successfully');
    
    // Check if superadmin already exists
    const superadminCheck = await query('SELECT * FROM users WHERE role = $1', ['superadmin']);
    
    if (superadminCheck.rows.length === 0) {
      // Create superadmin user
      await createUser(
        'admin@example.com',
        'Admin@123',  // This should be changed in production
        'Super Admin',
        'superadmin'
      );
      console.log('Superadmin user created successfully');
    } else {
      console.log('Superadmin user already exists');
    }
    
    return { success: true, message: 'Database initialized successfully' };
  } catch (error) {
    console.error('Database initialization error:', error);
    return { success: false, message: 'Database initialization failed', error };
  }
}

// Export a function to seed the database that can be called from scripts
export async function seedDatabase() {
  const result = await initializeDatabase();
  console.log(result.message);
  if (!result.success) {
    process.exit(1);
  }
  process.exit(0);
}

// Allow this file to be run directly
if (require.main === module) {
  seedDatabase();
}
