import { initializeDatabase } from '../lib/initDb';

async function main() {
  console.log('Starting database initialization and seeding...');
  
  try {
    const result = await initializeDatabase();
    console.log(result.message);
    
    if (!result.success) {
      console.error('Database initialization failed:', result.error);
      process.exit(1);
    }
    
    console.log('Database initialization and seeding completed successfully!');
    console.log('You can now log in with:');
    console.log('Email: admin@example.com');
    console.log('Password: Admin@123');
    
    process.exit(0);
  } catch (error) {
    console.error('An unexpected error occurred:', error);
    process.exit(1);
  }
}

main();
