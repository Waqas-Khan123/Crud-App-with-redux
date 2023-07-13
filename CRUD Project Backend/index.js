const express=require('express');
const db=require('./api/helper/db_connect')
const auth_route=require('./api/router/route')
const app=express();
const port=1200;
app.use(express.json());
var cors = require('cors')
app.use(cors({
    origin:'http://localhost:3000'
}));
db();

app.use('/api',auth_route);
app.listen(port,()=>{
    console.log('port working on 6000');
})