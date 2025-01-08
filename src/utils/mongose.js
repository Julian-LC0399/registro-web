import {connect, connection } from "mongoose";

const online = {
    isconeted : false
}

export async function connectDB() {

    if (online.isconeted) return;

    const db = await connect('mongodb://localhost/asignatura-app')
    console.log(db.connection.db.databaseName)
    online.isconeted = db.connections[0].readyState
}

connection.on('Conectado', () => {
    console.log('Conexión exitosa a la BD')
})

connection.on('Error', (err) => {
    console.log('Error de conexión', err)
})