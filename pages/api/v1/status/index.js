import database from "infra/database.js";

// O nome status da função não é a mesma coisa que o método .status
// apesar de ter mesmo nome, são coisas diferentes
async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 AS SUM;");
  console.log(result.rows);
  response.status(200).json({ chave: "valor" });
}

export default status;
