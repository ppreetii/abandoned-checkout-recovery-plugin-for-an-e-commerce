const Cart = require("../db/models/cart");
const Message = require("../db/models/message");
const CONSTANTS = require("../constants/common");
const { sendEmail } = require("../utils/email");

exports.checkoutAbandoned = async (cartId, userId, checkoutUrl) => {
  try {
    let messagePromises = createMessageSchedule(cartId, userId, checkoutUrl);

    messagePromises.forEach(async (promise) => {
      promise
        .then((value) => {
          console.log(value);
        })
        .catch((error) => {
          throw error;
        });
    });
  } catch (error) {
    throw error;
  }
};

let createMessageSchedule = (cartId, userId, checkoutUrl) => {
  try {
    let promises = [];

    CONSTANTS.MSG_SCHEDULE.forEach((delay, index) => {
      promises[index] = new Promise(async (resolve, reject) => {
        setTimeout(async () => {
          try {
            let cart = await Cart.findById(cartId).populate(
              "userId",
              "name email -_id"
            );

            //check if cart exists, and if yes, check if order state = 2
            if (cart?.order_state === CONSTANTS.ORDER_STATES.ABANDONED_CART) {
              //check if message already exists with this cartId
              let message = await Message.findOne({
                cartId,
              });

              if (!message) {
                message = new Message({
                  cartId,
                  userId,
                  attempt: 1,
                });
              } else message.attempt += 1;

              if (message?.attempt ?? 1 <= 3) {
                let subject = CONSTANTS.MSG_TEMPLATES[index].subject;
                let body = CONSTANTS.MSG_TEMPLATES[index].body
                  .replace(/{{customerName}}/g, cart.userId.name)
                  .replace(/{{checkoutUrl}}/g, checkoutUrl);

                await message.save();
                await sendEmail(subject, body, cart.userId.email);
                resolve("Email sent for Checkout Reminder");
              }
            }

            if (!cart) {
              await Message.findOneAndDelete({
                cartId,
              });
              resolve("No Cart Found");
            }
          } catch (error) {
            reject(error);
          }
        }, delay);
      });
    });

    return promises;
  } catch (error) {
    throw error;
  }
};
