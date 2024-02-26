import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import helmet from "helmet";
import bodyparser from 'body-parser';
import router from './routing/Routing.js';
import { errorMiddleware, notFound } from './middleware/errorMiddleware.js';
import ConnectDb from './middleware/Dbconnect.js';
dotenv.config();
ConnectDb();
const app = express();
app.use(express.json());
app.use(cors({
    origin: "*",
    Credential: true
}))
app.use(helmet({
    contentSecurityPolicy: false,
    xDownloadOptions: false,
}));
app.use(bodyparser.json());
app.use(morgan(`${process.env.MORGAN}`));
// routing apis
app.use("/ecom", router);

// middleware
app.use(notFound);
app.use(errorMiddleware)
app.listen(process.env.PORT, () => {
    console.log(`Server Runing Port : ${process.env.PORT}`)
})

