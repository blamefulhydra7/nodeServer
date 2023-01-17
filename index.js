import express from 'express';
import cors from 'cors';
import { home, todoList } from './routes/index.js';
import { conectar } from './conexion.js';

const server = express();
server.use(cors());
server.use(express.json());

const PORT = 3000;

server.listen(PORT, () => {
  console.log('Server iniciado.');
  conectar();
});

server.use('/api/v1', home);
server.use('/api/v1/todoList', todoList);