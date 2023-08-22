const express = require('express');
const routes = require('./src/routes/api');

//creando el servidor
const app = express();
app.use(express.json());
app.use('/api', routes);
const PORT = 3000; //TODO crear enviroments

app.listen(PORT, () => {
    console.log("El servidor se ha levantado correctamente en el puerto", PORT);
});