const express = require ('express')
const app = express()
const PORT = 5000;
const sendMail = require ('./controller/sentMail')


app.get('/',(req,res)=>{     //route page of home
    res.send("I am a Server")
})

app.get("/mail",sendMail)
const start = async ()=>{
    try {
        app.listen(PORT,()=>{
            console.log(`I am alive at port no.${PORT}`);
        })
    } catch (error) {
        
    }
}


start();