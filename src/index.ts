import express from 'express';

const mongoose = require('mongoose');
const url = 'mongodb://localhost/crudDB';

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => console.log('Conectado a mongo'))
.catch( (e: any) => console.log('El error de conexion es: '+ e));

const itemsSchema = mongoose.Schema({
    nombre: String,
    precio: Number,
    cantidad: Number,
},{versionKey: false})

const ItemsModel = mongoose.model('items',itemsSchema)


//Mostrar items
const mostrar = async () => {

  const items = await ItemsModel.find()
  console.log(items)
}

//crear items
const crear = async () => {
  const item = new ItemsModel({
    nombre: 'NARANJA',
    precio: 100,
    cantidad: 10,         	
  })

  const resultado = await item.save()
  console.log(resultado)
}

//Editar
const actualizar = async (id:any) => {
  const item = await ItemsModel.updateOne({_id:id},
    {
      $set: {
        nombre: 'MANZANA ROJA',
        precio: 170,
        cantidad: 50,
      }
    })
}

//Borrar
const eliminar = async (id:any) => {
  const item = await ItemsModel.deleteOne({_id:id})
  console.log(item)
}



//llamado a metodos
// mostrar()
// crear()
actualizar('62546132521b235fa06f5142')
eliminar('62546132521b235fa06f5142')

/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
    process.exit(1);
 }
 
 const PORT = process.env.PORT || 80;
 
 const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });