const express = require('express');
const calculatorRoutes = require('./routes/calculatorrouter');

const app = express();
const PORT = 3000;

app.use('/api', calculatorRoutes);

app.listen(PORT, () =>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});