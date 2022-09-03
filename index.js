const express = require('express');
const cors = require('cors');
const userRouter = require('./Routes/version-1/user.route');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;


//middleware

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('server is running')
})

app.use('/user',userRouter)

app.all('*',(req,res)=>{
    res.send('Not Found')
})

app.listen(port,()=>{
    console.log(`listening to port: ${port}`);
})