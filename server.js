const express = require('express')
const app = express()
const path = require('path')
var cors = require('cors');

app.use(cors());


app.use(express.static(path.join(__dirname, 'dist')))

app.get('/api/test', (req, res) => {
    res.send('Hello')
})

const port = process.env.PORT || 8080
console.log({ port });

app.listen(port, () => {
    console.log(`App is listening to port ${port}.`);
})

module.exports = app