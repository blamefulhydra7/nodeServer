import express from 'express';
import cors from 'cors';
import http from 'http';
import { todoList } from './routes/index.js';
import { conectar } from './conexion.js';
import socket from './socket/socket.js';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.use('/api/v1/todoList', todoList);

const server = http.createServer(app).listen(PORT, '0.0.0.0');

console.log('Servidor iniciado en puerto', PORT);

conectar();

socket.iniciar(server);