const mailer = require('nodemailer');

exports.sendEmail = async (req, res) => {
    const {firstName, lastName, email, phoneNumber, qc} = req.body;

    const transport = mailer.createTransport({
        host: 'smtp.forwardemail.net',
        port: 465,
        secure: true,
        service: 'gmail',
        auth: {
            user: 'jackywang8911@gmail.com',
            pass: 'elegant0805'
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const mailOptions = {
        from: email,
        to: 'jackywang8911@gmail.com',
        subject: 'New message',
        text: `
            Hello, Jeremy,
            You got message from ${firstName}.
            Name: ${firstName} ${lastName}\n
            Email: ${email}\n
            PhoneNumber: ${phoneNumber}\n
            Questions/Concerns: ${qc}\n
            
            Best Wishes
            Wang Yi
        `
    };

    transport.sendMail(mailOptions, (err, info) => {
        if (err) {
            res.send(err)
        } else {
            res.send({
                status: 'success',
                response: info.response
            })
        }
    })
}