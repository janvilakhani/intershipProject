var nodemailer = require('nodemailer');

const sendMail = async (req, res) => {
    console.log(req.body)
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: req.body.user,
            pass: req.body.pass
        }
    });

    var mailOptions = {
        from: req.body.user,
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}

module.exports = sendMail

// git init
// git add <folder1> <folder2> <etc.>
// git commit -m "Your message about the commit"
// git remote add origin https://github.com/yourUsername/yourRepository.git
// git push -u origin master
// git push origin master