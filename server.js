const express = require("express");
const cors= require("cors");
require("dotenv").config();

const app= express();
app.use(cors());
app.use(express.json());

//Rutas
//localhost:3301/api/SignIn
app.use('/api/auth', require('./routes/authRoutes'));


const PORT = process.env.PORT || 3001;
app.listen (PORT, 
    ()=>console.log(`SERVIDOR CORRIENDO EN PUERTO ${PORT}`)

)