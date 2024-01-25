const nodemailer = require("nodemailer")

const sendMail = async (req,res) =>{
    let testAccount = await nodemailer.createTestAccount();


    //CONNECT WITH THE SMTP 
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'emmie68@ethereal.email',
            pass: 'uC2HmVNHxEtePFansm'
        }
    });

    let info = await transporter.sendMail({
        from: '"Mohammed Sahil 👻" <sahilms750@gmail.com>', // sender address
        to: "mumthazshihabudheen77@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>",
    })
    console.log("Message sent: %s", info.messageId);
    res.json(info)
};



module.exports = sendMail