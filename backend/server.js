const express = require('express');
const http = require('http');
const cors = require('cors');
const router = express.Router();

const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

router.post('/suma',(req,res)=>{
    let a = req.body.a;
    let b = req.body.b;
    let result = a+b;
    res.json({
        resultado:result
    });
});

app.use(router);

server.listen(3000,()=>{
    console.log('Escuchando en puerto 3000');
})