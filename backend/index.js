const express = require('express');
const app = express();
const connection = require('./config/conn')
// connection();

const port = process.env.PORT || 3000;

const routes = require('./routes/index.routes');

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api', routes);


app.listen(port, ()=>console.log(`server is running on port ${port}`));