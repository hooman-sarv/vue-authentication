const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();

app.use(cors());
app.use(bodyParser.json());

var validUsers = [{username:'hooman' , password:'1375'}];
console.log(validUsers);


app.post('/register' , (req , res) => {

    let regData = req.body;
    let userIndex = validUsers.push(regData);
    let userID = userIndex -1 ;
    console.log(validUsers);

    let token = jwt.sign(userID , '1996');
    console.log(token);
    console.log(`user registerd`);
    res.json(token);

})

app.post('/login' , (req ,res) => {

    let loginData = req.body;
    console.log(loginData);

    let userId = validUsers.findIndex(user => user.username == loginData.username)
    if (userId == -1) {
        return res.status(401).send({message:'Username is invalid!'})
    }
    if (validUsers[userId].password != loginData.password) {
        console.log(validUsers[userId].password);
        console.log(loginData.password);
        return res.status(401).send({message: 'Password is invalid'})
    }
    console.log(`user logged in`);

    let token = jwt.sign(userId , '1996');
    console.log(token);
    res.json(token)

})


const port = 5000;
app.listen(port , ()=> console.log(`app running on port : ${port}`));