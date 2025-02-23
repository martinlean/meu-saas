const express = require("express");
const app = express();
const cors = require("cors");

// Configurações básicas
app.use(express.json());
app.use(cors());

// Importando rotas
const userRoutes = require("./src/routes/userRoutes");
const commentRoutes = require("./src/routes/commentRoutes");

app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);

// Iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
