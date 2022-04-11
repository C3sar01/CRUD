import express from 'express';

const mongoose = require('mongoose');
const url = 'mongodb://localhost/crudDB';
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