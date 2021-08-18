const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
    {
        host: 'ENTER YOUR HOST',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'ENTER YOUR EMAIL',
            pass: 'ENTER YOUR PASSWORD'
        }
    },
    {
        from: 'Почтовый бот <ENTER YOUR EMAIL>'
    })

const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if (err) return console.log(err)
        console.log('Email sent: ', info)
    })
}

module.exports = mailer