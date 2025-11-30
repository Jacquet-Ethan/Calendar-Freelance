// Script d'initialisation de la base de données
import postgres from 'postgres';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sql = postgres(process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/freelance_db');

async function initDatabase() {
  try {
    console.log('🔧 Création des tables...');
    
    // Lire et exécuter le fichier de migration
    const migrationSQL = readFileSync(join(__dirname, 'migrations', '00.sql'), 'utf-8');
    await sql.unsafe(migrationSQL);
    
    console.log('✅ Tables créées avec succès');
    
    console.log('🌱 Insertion des données de seed...');
    
    // Lire et exécuter le fichier de seed
    const seedSQL = readFileSync(join(__dirname, 'migrations', 'seed.sql'), 'utf-8');
    await sql.unsafe(seedSQL);
    
    console.log('✅ Base de données initialisée avec succès!');
    console.log('');
    console.log('🚀 Vous pouvez maintenant lancer le serveur avec:');
    console.log('   npx tsx watch src/servers.ts');
    
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation:', error.message);
    console.error(error);
  } finally {
    await sql.end();
  }
}

initDatabase();
