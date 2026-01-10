// O nome status da função não é a mesma coisa que o método .status
// apesar de ter o mesmo nome, são coisas diferentes
function status(request, response) {
  response.status(200).json({ chave: "valor" });
}

export default status;
