import express, { Application } from 'express';
import dotenv from 'dotenv';
import userRoutes from './interfaces/http/routes/userRoutes';

//load env varaibles
dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// routes
app.use('/api', userRoutes);


export default app;