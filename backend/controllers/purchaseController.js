// purchase main logic

const nodemailer = require("nodemailer");

const makePurchase = async (req, res) => {
  console.log(req.body);
};

const sendEmail = async (req, res) => {
  // Inside your controller after storing purchase
  //   const transporter = nodemailer.createTransport({
  //     service: "Gmail",
  //     auth: {
  //       user: "your-email@gmail.com",
  //       pass: "your-email-password",
  //     },
  //   });
  //   const mailOptions = {
  //     from: "your-email@gmail.com",
  //     to: "business-owner@example.com",
  //     subject: "New Purchase Made",
  //     text: `A purchase was made by ${name}. Quantity: ${quantity}.`,
  //   };
  //   transporter.sendMail(mailOptions, (error, info) => {
  //     if (error) {
  //       console.error("Error sending email:", error);
  //     } else {
  //       console.log("Email sent:", info.response);
  //     }
  //   });
};

module.exports = makePurchase;
