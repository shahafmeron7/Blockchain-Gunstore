const express = require('express')
const path =require('path');
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
require('dotenv').config()
const PORT = process.env.PORT || 4000;
const app = express();


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname,'../client/dist')));
app.get('*',(req,res)=>res.sendFile(path.join(__dirname,'../client/dist/index.html')));
//DB connectionn
mongoose.connect(process.env.DB_URI, {useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("DB connected");
})
.catch((err)=>{
    console.log(err);
})

//define the route for our weapon database
const weaponsRouter = require('./routes/weapons')

app.use('/weapons',weaponsRouter)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
