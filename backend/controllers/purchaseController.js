// purchase main logic
if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

const nodemailer = require("nodemailer");

const makePurchase = async (req, res) => {
  // Make purchase

  // Send Email
  sendEmail(req);

  // Save to database
  console.log(req.body);
};

const sendEmail = (req, res) => {
  const data = req.body;
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.EMAIL,
    to: data.email,
    subject: "New Purchase Made",
    text: `A purchase was made by ${data.name} on ${data.date}. Order : Quantity: ${data.quantity}   Address: ${data.address}   Phone: ${data.phone}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

module.exports = makePurchase;
