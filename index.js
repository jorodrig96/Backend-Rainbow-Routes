require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: white;">
                <h2 style="text-align: center;">/home route</h2>
            </div>
            <h1>White Page</h1>
        </body>
    `)
})

//using req.params to call any color you want 
//in line 24, the charat method changed the first word, aka (0), to uppercase.
app.get('/:color', (req, res) => {
    let myColor = req.params.color
    res.send(`<body style="margin: 0;">
    <div>
        <h2 style="text-align: center; color: ${myColor}">/:color route</h2>
    </div>
    <h1 style="border: 1px solid black; height: 10vh; background-color: ${myColor};">${myColor.charAt(0).toUpperCase() + myColor.slice(1)}page</h1>
</body>`)
})

app.post('/:color', (req, res) => {
    let myColor = req.params.color
    res.send(`My favorite color is ${myColor}`)
})


app.listen(process.env.PORT , () => {
    console.log(` you have been connected to the app. running on ${process.env.PORT}`)
})