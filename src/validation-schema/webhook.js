const Joi = require("joi");

let checkoutWebhookSchema = Joi.object()
  .keys({
    cartId: Joi.string().required(),
    userId: Joi.string().required(),
    checkoutUrl: Joi.string().required()
  })
  .required();

module.exports = {
    checkoutWebhookSchema
};
