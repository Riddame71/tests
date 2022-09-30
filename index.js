const nodemailer = require('nodemailer')


let msg = {
    from:'umershahid71@gmail.com',
    to:'umershahid71@gmail.com',
    subject:'API Test {Activity} Report',
    text:'Automated Test Report',
    attachments: [{
        filename:'test-report.html' , path:'./test-report.html'
    }]
};

nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'umershahid71@gmail.com',
        pass:'nvpxepxsbmlokwcj'
    },
    port:465,
    host:'smtp.gmail.com'
})
.sendMail(msg , (err) => {
    if (err) {
        return console.log("Error Occured");
    }
    else{
        return console.log('Email Sent')
    }
})
