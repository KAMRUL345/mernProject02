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
//login
app.post('/login', async (req, res)=>{
    const {username, password} = req.body;
    try {
        const user = users.find(user=> user.username === username) 
        if(!user) return res.status(404).json({message: "User not found"});
        const isMatch =  await bcrypt.compare(password, user.password)
        if(isMatch){
            res.status(200).json({message: "Login Successful !"})
        }else{
             res.status(401).json({message: "Invalid Password"})
        }
    } catch(error){
        res.status(500).json({error:"Something wend wrong"})

    }
})

const PORT = 3000;

app.get('/', (req, res)=>{
    res.send('Hello Kamrul');
})

app.listen(PORT, ()=>{
    console.log(`app is running on port ${PORT}`);
})