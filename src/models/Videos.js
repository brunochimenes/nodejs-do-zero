import { sql } from "../database/db.js";

// sql`DROP TABLE IF EXISTS videos`.then(() => console.log("Tabela deletada!"));

sql`CREATE TABLE videos (
  id TEXT PRIMARY KEY,
  description TEXT,
  title TEXT,
  duration INTEGER
);`.then(() => console.log("Tabela criada!"));
