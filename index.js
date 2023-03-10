import express from 'express';
import cors from 'cors';
import mssql from 'mssql';
import { home } from './routes/index.js';

const server = express();
server.use(cors());
server.use(express.json());

const PORT = 3000;

server.listen(PORT, () => {
  console.log('Server iniciado.');
  conectar();
});

const sqlConfig = {
  user: 'usuario',
  password: 'pass',
  database: 'DB',
  server: 'BLAMEFULHYDRA7\DEV2019',
  pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
  },
  options: {
      encrypt: true, // for azure
      trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

const conectar = async () => {
  try {
    await mssql.connect(sqlConfig);
    await mssql.query('Select 1 + 1;');
    console.log('Conexión a DB exitosa.');
  } catch (error) {
    console.log('Conexión a DB errónea.');
  }
}

server.use('/api/v1', home);