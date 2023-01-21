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

            console.log('Cliente conectado');
            
            this.io.on('disconnect', (socket) => {
                console.log('cliente desconectado');
            });
        })

    }
}

export default new Socket();