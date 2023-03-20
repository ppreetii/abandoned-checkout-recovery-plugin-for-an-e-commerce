const webhookServices = require("../../services/webhook");
const {checkoutWebhookSchema} = require("../../validation-schema/webhook");
const {validate} = require("../../utils/validation")

exports.checkoutAbandoned = async (req, res, next) => {
  try {
    const { cartId, userId, checkoutUrl } = req.body;
    await validate(checkoutWebhookSchema, req.body);
    await webhookServices.checkoutAbandoned(
      cartId,
      userId,
      checkoutUrl
    );

    res.status(200).send({
      status: "Success",
      message: "Checkout Abandon Webhook processed successfully",
    });
  } catch (error) {
    // Log the error
    console.error("Error processing Checkout Abandon webhook:", error);

    // Send an error response to the webhook provider
    res.status(500).send({
      status: "Fail",
      message: "Error processing Checkout Abandon webhook",
    });
  }
};

exports.orderPlaced = async (req, res, next) => {
  try {
    const { cartId } = req.body;

    await webhookServices.orderPlaced(cartId);

    res.sendStatus(200);
  } catch (error) {
    // Log the error
    console.error("Error processing Order Placed webhook:", error);

    // Send an error response to the webhook provider
    res.status(500).send({
      status: "Fail",
      message: "Error processing Order Placed webhook",
    });
  }
};
