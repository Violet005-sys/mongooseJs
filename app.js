const express = require('express');
const app = express();


const PORT = 3000 || process.env.PORT;

//connectDB
const { connectDB } = require('./connect/mongoose_URI');
connectDB();

//functions
const { createPerson, createPeople, finByIdAndUpdate, findById, findOnePerson, findSomeone, findOneAndUpdate,deleteMany,deleteOne } = require('./functions/controllers');
createPerson();
/* createPeople();
finByIdAndUpdate();
findById();
findOnePerson();
findSomeone();
findOneAndUpdate();
deleteMany();
deleteOne(); */

app.get('/', (req, res) => {
    res.send(`Welcome to base`)
});

app.listen(PORT, (req, res) => {
    console.log(`server is listening on ${PORT}`)
})