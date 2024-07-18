const mongoose = require('mongoose');
const connectionString = "mongodb://localhost:27017/checkpoint";

const connectDB = async() => {
    try {
         await mongoose
        .connect(connectionString,
            { useNewUrlParser: true, useUnifiedTopology: true }
        )
        .then(() => {
            console.log('Database connected successfully')
        })
        .catch((err) => console.error(err))
    } catch (error) {
        console.log(error)
    }
   
}

module.exports = { connectDB };