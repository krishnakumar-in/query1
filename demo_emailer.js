var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'khv1986@gmail.com',
        pass: 'KHV123'
    }
});

var mailOption = {
    from: 'khv1986@gmail.com' ,
    to: 'riten.s.v@gmail.com',
    subject: 'My First Mail',
    text: 'Please check the mail'
};

transporter.sendMail(mailOption, function(error, info){
    if(error){
        console.log(error);
    } else {
        console.log('Email send' + info.response);
    }
});