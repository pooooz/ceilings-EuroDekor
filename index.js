const express = require('express');
const bodyParser = require('body-parser');
const mailer = require('./nodemailer');

const app = express();

const PORT = process.env.PORT || 80;

let urlencodedParser = bodyParser.urlencoded({extended: false});

app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    const message = {
        to: 'Enter the recipient\'s mail',
        subject: 'Enter suspect',
        text: `
        Имя: ${req.body.name} 
        Номер телефона: ${req.body.number}`
    }
    mailer(message);
    res.redirect('/');
})

app.listen(PORT, () => {
    console.log('Server started on: ' + PORT);
})