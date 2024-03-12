const express = require('express')
const app = express()
const dotenv = require('dotenv');
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const jobRoute = require('./routes/job');
const bookmarkRoute = require('./routes/bookmark');

dotenv.config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

const cors = require('cors');

app.use(express.json());
app.use("/api/", authRoute);
app.use("/api/users", userRoute);
app.use('/api/jobs', jobRoute);
app.use('/api/bookmarks', bookmarkRoute);



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(process.env.PORT || 8081, () => console.log(`Example app listening on port ${process.env.PORT}!`))


