import { Server } from "socket.io";

class Socket {
    static io;

    iniciar(httpServer) {
        this.io = new Server(httpServer, {
            cors: {
                origin: '*',
            }
        });
        this.escuchar();
    }

    escuchar() {
        console.log('Empiezo a escuchar socket.');
        this.io.on('connection', (socket) => {

            socket.on('login', ({sala}) => {
                socket.join(sala);
            });

            socket.on('mensaje', (mensaje) => {
                this.io.to(mensaje.sala).emit('mensaje', mensaje);
            });
        })

    }
}

export default new Socket();