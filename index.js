const express = require("express");
const app = express();
const port = process.env.PORT || 4040;

require('./database/db') //Database Connection



app.use(express.json());


app.use('/api', require('./routes/studentRoute'))

app.listen(port, () => { console.log(`App is Listening on http://localhost/${port}`) })