// Importamos el módulo HTTP incluido en Node.js
const http = require('http');

// Importamos el módulo OS para obtener el nombre del equipo
const os = require('os');

// Definimos el puerto donde escuchará el servidor
const PUERTO = 3000;

// Creamos el servidor HTTP
const servidor = http.createServer((req, res) => {
    // Obtenemos la ruta solicitada
    const ruta = req.url;

    // Ruta principal: mensaje de bienvenida
    if (ruta === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Bienvenido a la API de Jaime');
    }

    // Ruta /estado: devuelve información del servicio en JSON
    else if (ruta === '/estado') {
        const estado = {
            servicio: 'api_node',
            hostname: os.hostname(),
            uptime_segundos: process.uptime(),
            fecha: new Date().toISOString()
        };

        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(estado, null, 2));
    }

    // Cualquier otra ruta devuelve error 404
    else {
        res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
    }
});

// El servidor escucha en el puerto 3000
servidor.listen(PUERTO, () => {
    console.log(`Servidor escuchando en http://localhost:${PUERTO}`);
});