import mssql from 'mssql';

const sqlConfig = {
  user: 'sa',
  password: 'root',
  database: 'AngularApp',
  server: 'localhost\\DEV2019',
  port: 1433,
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

export const conectar = async () => {
  try {
      await mssql.connect(sqlConfig);
      await mssql.query('Select 1 + 1;');
      console.log('Conexión a DB exitosa.');
  } catch (error) {
      console.log('Conexión a DB errónea.');
  }
}

export default mssql;