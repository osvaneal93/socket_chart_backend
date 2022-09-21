const {io} = require ('../index');

io.on('connection', client => {
    console.log('Cliente CONECTADO');
    client.on('disconnect', () => console.log('Cliente Desconectado'));
    client.on('mensaje', (msj) => {
        console.log('Mensaje: ', msj),
            io.emit('mensaje', { admin: 'nuevo Mensaje tios' })
    });

});