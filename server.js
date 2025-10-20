const express = require('express');
const sequelize = require('./src/config/database');
const estoqueRoutes = require('./src/routes/estoqueRoutes');

const app = express();
app.use(express.json());

app.use('/api/estoque', estoqueRoutes);

// 🔹 Rota de teste
// app.get('/api/estoque', async (req, res) => {
//   try {
//     const estoque = await Estoque.findAll();
//     res.json(estoque);
//   } catch (err) {
//     res.status(500).json({ erro: err.message });
//   }
// });

// 🔹 Testa conexão e inicia servidor
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com o banco de dados bem-sucedida!');

    await sequelize.sync(); // opcional: cria tabelas se não existirem

    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco:', error);
  }
})();
