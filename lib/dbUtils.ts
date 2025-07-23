import { query } from './db';

/**
 * Example utility functions for database operations
 */

/**
 * Execute a raw SQL query
 */
export async function executeQuery(sql: string, params?: any[]) {
  try {
    const result = await query(sql, params);
    return result;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

/**
 * Example function to fetch all rows from a table
 */
export async function fetchAllFromTable(tableName: string) {
  try {
    const sql = `SELECT * FROM ${tableName}`;
    const result = await query(sql);
    return result.rows;
  } catch (error) {
    console.error(`Error fetching data from ${tableName}:`, error);
    throw error;
  }
}

/**
 * Example function to fetch a row by ID
 */
export async function fetchById(tableName: string, id: number | string) {
  try {
    const sql = `SELECT * FROM ${tableName} WHERE id = $1`;
    const result = await query(sql, [id]);
    return result.rows[0];
  } catch (error) {
    console.error(`Error fetching ${tableName} with id ${id}:`, error);
    throw error;
  }
}

/**
 * Example function to insert a row
 */
export async function insertRow(tableName: string, data: Record<string, any>) {
  try {
    const columns = Object.keys(data).join(', ');
    const placeholders = Object.keys(data).map((_, i) => `$${i + 1}`).join(', ');
    const values = Object.values(data);
    
    const sql = `INSERT INTO ${tableName} (${columns}) VALUES (${placeholders}) RETURNING *`;
    const result = await query(sql, values);
    return result.rows[0];
  } catch (error) {
    console.error(`Error inserting into ${tableName}:`, error);
    throw error;
  }
}
