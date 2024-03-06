const express= require('express')
const dotenv=require("dotenv").config
const port=process.env.PORT ||5000
const app=express();
app.use(express.json())
app.use('/api/contacts',require("./routes/contactRoutes"))
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})