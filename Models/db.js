const mongoose = require('mongoose');
require('dotenv').config();

const mongo_URL = process.env.MONGO_CONN;

if (!mongo_URL) {
    console.error("MONGO_CONN environment variable is not set");
    process.exit(1);
}

mongoose.connect(mongo_URL, {

    })
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.error("Mongoose connection error:", err);
    });