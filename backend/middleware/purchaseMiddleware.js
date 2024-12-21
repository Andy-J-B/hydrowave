// input validation

const verifyPurchase = async (req, res, next) => {
  const data = req.body;
  if (
    !data["name"] ||
    !data["date"] ||
    !data["address"] ||
    !data["phone"] ||
    !data["email"] ||
    !data["quantity"] ||
    !data["transactionInfo"] ||
    !data["transactionInfo"]["paymentId"] ||
    !data["transactionInfo"]["status"]
  ) {
    return res.status(400).send("Missing required fields");
  }

  next();
};

module.exports = verifyPurchase;
