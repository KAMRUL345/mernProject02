# mernProject02
Mern Backend Project 02

            #Encryption-decryption Process
````
const algorithm = 'aes-256-cbc';
const secretKey = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

//Function for encryption

function encrypt(text){
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return {
        iv: iv.toString('hex'),
        content: encrypted
    } 
}

//Decrypt by bcrypt
function decrypt(encrypted){
    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(encrypted.iv, 'hex'))
    let decrypted = decipher.update(encrypted.content, 'utf8', 'hex')
    decrypted += decipher.final('utf8');
    return decrypted; 
}

app.post('/encrypt', (req, res)=>{
    const {text} = req.body;
    const encrypted = encrypt(text);
    res.json(encrypted);
})

app.post('/decrypt', (req, res)=>{
    const {encryptedData} = req.body;
    const decrypted = decrypt(encryptedData);
    res.json(decrypted);

})

````