import mssql from "../conexion.js";
import moment from 'moment';

export const getTareas = async (req, res) => {
    try {
        const tareas = await mssql.query('Select TareaID, Descripcion, Completada from Tarea');
    
        return res.status(200).send(tareas.recordsets[0]);
    } catch (error) {
        return res.sendStatus(500);
    }
}

export const addTarea = async (req, res) => {
    try {
        const { tarea } = req.body

        await mssql.query(`INSERT INTO Tarea(Descripcion, Completada, FechaCreacion) 
            VALUES ('${tarea.Descripcion}', ${tarea.Completada}, '${moment().format('YYYY-MM-DD')}')`);

        return res.sendStatus(201);
    } catch (error) {
        return res.sendStatus(500);
    }
}