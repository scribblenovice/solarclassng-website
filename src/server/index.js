import express from "express";
import nodemailer from "nodemailer"
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors())

const transporter = nodemailer.createTransport({
  host: "mail.solarclassng.com",
  port: 587, // or the appropriate port for your mail service
  secure: false, // true for 465, false for other ports
  auth: {
    user: "solarcla",
    pass: "1]OU7*lGpv0f2P",
  },
});

app.post("/receive-email", (req, res) => {
    console.log(req.body);
  const { name, email, subject, message } = req.body;
  const mailOptions = {
    from: email,
    to: "contact@solarclassng.com",
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send("failed");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("sent");
    }
  });
});

// app.post('/send-email', (req, res) => {
//   const { to, subject, text } = req.body;

//   const mailOptions = {
//     from: 'your_email@gmail.com',
//     to: to,
//     subject: subject,
//     text: text
//   };

//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//       res.status(500).send('Failed to send email');
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.status(200).send('Email sent successfully');
//     }
//   });
// });

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
