require('dotenv').config();
const express = require('express');
require('./Models/db.js');
const bodyParser = require('body-parser');
const authRouter = require('./Routes/AuthRouter.js');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json()); // Fix here: Call it as a function
app.use(cors());

// Routes
app.get('/ping', (req, res) => {
    res.send("pong");
});

app.use('/auth', authRouter);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});