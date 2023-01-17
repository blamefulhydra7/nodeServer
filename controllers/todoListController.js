import mssql from "../conexion.js";

export const getPreguntas = async (req, res) => {
    await mssql.query('Select 1 + 1');

    res.status(200).send('El endpoint funciona y la conexión a BD también');
}