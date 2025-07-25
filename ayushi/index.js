import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import userRoutes from './routes/user.js';
import { errorHandler } from './middleware/errorHandler.js';
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use(userRoutes); 

app.use(errorHandler); 

app.listen(3000,(err)=>{
    if(err){
        console.log(err);

    }
    else{
        console.log("server is running on 3000")
    }
})
//localhost:3000/users