const express = require('express')
const app = express()
const port = 3000

app.use(express.json);

app.get('/', (req, res) => {
    res.send("Hello World!")
});

app.get('./signup', (req,res) =>{
    res.send("Sign up Page")

})


app.post('/signup', (req,res) =>{
    const {username,password,email,dateofbirth} = req.body;
    if (!username){
        return res.status(400).send("Username cannot be empty");
    }

    else if(!password){
        return res.status(400).send("Password cannot be empty")
    }

    else if(!email){
        return res.status(400).send("Email cannot be empty")
    }

    else if(!dateofbirth){
        return res.status(400).send("Date of birth cannot be empty")
    }

    else if (!password.length <8 && !password.length >=16){   
        return res.status(400).send("The password must be greater than 8 and equal to 16 characters")
};

    res.status(201).json({
        message: "User signed up successfully",

    user:{
        username,
        email,
        dateofbirth,
    }
})});

app.listen(port, () =>{
    console.log(`Server is listening to http://localhost:${port}`)
});

