const express = require('express');
//const crypto = require('crypto');
const bcrypt = require('bcrypt');



const app = express();
app.use(express.json());


const users = [];
app.post('/register', async (req, res)=>{
    const {username, password} = req.body;
    try {
        const hashPassword = await bcrypt.hash(password, 10);
        users.push({
            username: username,
            password: hashPassword
        })
        console.log(users);
        res.status(201).json({message: "User registered successfully"})
    } catch(error) {
        res.status(500).json({error: "Something went wrong!"})

    }
})


const PORT = 3000;

app.get('/', (req, res)=>{
    res.send('Hello Kamrul');
})

app.listen(PORT, ()=>{
    console.log(`app is running on port ${PORT}`);
})