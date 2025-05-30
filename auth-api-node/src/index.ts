import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import privateRoutes from './routes/private';
import cors from 'cors';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Registra as rotas da API antes de iniciar o servidor
app.use('/api', authRoutes);
app.use('/api', privateRoutes);

// Rota raiz só pra teste
app.get('/', (req, res) => {
  res.send('API de autenticação');
});

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log('Conectado ao MongoDB');

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error.message);
  });
