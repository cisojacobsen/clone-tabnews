// infra/database.js
// Simulação de um módulo de banco de dados

// Aqui você pode configurar a conexão com o banco de dados
// e exportar funções para interagir com ele.

// Exemplo simples usando pg (PostgreSQL)
// importação do módulo Client do pacote 'pg'
import { Client } from "pg";

// Função para executar uma consulta no banco de dados
async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });
  await client.connect();
  const result = await client.query(queryObject);
  await client.end();
  return result;
}

export default {
  query: query,
};
