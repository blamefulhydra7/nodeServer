import mssql from "../conexion.js";
import moment from 'moment';

/**
 * @description Método para obtener las tareas no completadas y devolverlas al front.
 */
export const getTareas = async (req, res) => {
    try {
        const tareas = await mssql.query('Select TareaID, Descripcion, Completada from Tarea');
    
        return res.status(200).send(tareas.recordsets[0]);
    } catch (error) {
        return res.sendStatus(500);
    }
}

/**
 * @description Método para insertar la nueva tarea a la tabla de SQL Server.
 */
export const addTarea = async (req, res) => {
    try {
        const { tarea } = req.body;

        await mssql.query(`INSERT INTO Tarea(Descripcion, Completada, FechaCreacion) 
            VALUES ('${tarea.Descripcion}', 0, '${moment().format('YYYY-MM-DD')}')`);

        const {recordset} = await mssql.query('SELECT max(TareaID) as TareaID FROM Tarea');

        return res.status(200).send(recordset[0]);
    } catch (error) {
        return res.sendStatus(500);
    }
}

/**
 * @description Método para actualizar una tarea.
 */
export const updateTarea = async (req, res) => {
    try {
        const { tarea } = req.body;
        
        await mssql.query(`UPDATE Tarea SET Completada = ${tarea.Completada ? 1 : 0}, FechaModificacion = '${moment().format('YYYY-MM-DD')}' WHERE TareaID = ${tarea.TareaID};`);

        return res.sendStatus(200);
    } catch (error) {
        return res.sendStatus(500);
    }
}