const express = require('express');
const app = express();
const PORT = 3000;

// for testing purposes
app.get('/', (req,res,next)=>{
    res.send('Hello World');
})

//testing git hub

app.listen(PORT, () => {console.log(`Server is listening to port ${PORT}`)});