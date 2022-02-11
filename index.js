const express=require('express')

const app=express()
const port=9000

app.use(express.json())

const mailRouter= require("./routes/mail");
app.use('/sendmail',mailRouter)



app.listen(port, () =>{
    console.log('Server started on port ',port);
})

