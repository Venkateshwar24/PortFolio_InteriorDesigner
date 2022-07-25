const express = require('express');
const app = express();
const PORT = process.env.PORT || 7000;
const { mongoose } = require('./db');
const cors = require('cors');
const bodyParser=require('body-parser');
const projectcontroller = require('./projectController');
const experiencecontroller = require('./experienceController');
app.use(bodyParser.json());
app.use(cors());
app.get('/',(req,res) => {
 res.send("Hello Portfolio!");
});
app.use('/projects', projectcontroller);
app.use('/experience', experiencecontroller);

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT} successfully!`)
});