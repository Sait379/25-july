import express from 'express';
import employees from './Routes/employees.js';
const app=express();
app.use(employees);
app.use(express.json());

app.listen(3000,(err)=>{
if(err){console.log(err);}
else{console.log("server is running on port 3000");}

})



