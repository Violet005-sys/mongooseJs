const express = require('express');
const app = express();


const PORT = 3000 || process.env.PORT;

//connectDB
const { connectDB } = require('./connect/mongoose_URI');
connectDB();

//person functions
const { createPerson, createPeople, finByIdAndUpdate, findById, findOnePerson, findSomeone, findOneAndUpdate,deleteMany,deleteOne } = require('./controllers/person_controllers');
createPerson();
/* createPeople();
finByIdAndUpdate();
findById();
findOnePerson();
findSomeone();
findOneAndUpdate();
deleteMany();
deleteOne(); */

//user functions
const { createUser, deleteUser, getUsers, updateUser,createMany } = require('./controllers/user_controllers');
createUser();
createMany();

app.get('/', (req, res) => {
    res.send(`Welcome to base`)
});

app.listen(PORT, (req, res) => {
    console.log(`server is listening on ${PORT}`)
})