const express = require('express')
const session = require('express-session')
const cors = require('cors');
const { SQL } = require('./dbconfig');

const PORT = 1000;
const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true
}

const app = express()
app.use(express.json())
app.use(cors(corsOptions))

app.use(session({
    secret: "michalhazanshoosh",
    name: "michal",
    resave: true, //זוכר כל פעולה
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365, //שנה
    }
}))

app.use('/bank', require('./routes/bank'))
app.use('/todos', require('./routes/todos'))
app.listen(PORT, () => console.log(`rocking port ${PORT}`))
