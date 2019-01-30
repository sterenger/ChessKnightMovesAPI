const express = require('express');
const app = express();
const calculatePossibilies = require('./calculatePossibilies');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept", "Content-Type", "application/json");
    next();
});


app.use(calculatePossibilies);

app.get('/get_move', (req, res) => {
    console.log(req.query[0]);
    console.log(req.query[1]);
    res.send(calculatePossibilies(req.query[0],req.query[1]));

});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});