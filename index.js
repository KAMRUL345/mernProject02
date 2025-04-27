const express = require('express');
const crypto = require('crypto');


const app = express();
app.use(express.json());

const algorithm = 'aes-256-cbc';
const secretKey = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt(text){
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    const encrypted = cipher.update(text, 'utf8', 'hex');
    
}


const PORT = 3000;

app.get('/', (req, res)=>{
    res.send('Hello Kamrul');
})

app.listen(PORT, ()=>{
    console.log(`app is running on port ${PORT}`);
})