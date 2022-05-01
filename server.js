const express = require('express');
const app = express();
const PORT = 3000;

// for testing purposes
app.get('/', (req,res,next)=>{
    res.send('Hello World');
})

app.get('/',(req,res,next)=>{
    res.status(200);
});

app.listen(PORT, () => {console.log(`Server is listening to port ${PORT}`)});