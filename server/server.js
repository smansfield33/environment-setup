const express = require('express'); 

const app = express(); 

app.get('/', (req, res) => {
    res.send("Hellooooo"); 
})

app.get('/message', (req, res) => {
    res.send("This is another message for you steven"); 
})

app.listen(3000, ()=> {
    console.log("Server started on port 3000...");
})

