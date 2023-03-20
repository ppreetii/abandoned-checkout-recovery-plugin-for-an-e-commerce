const User = require("../db/models/user");
const Cart = require("../db/models/cart");
const CONSTANTS = require("../constants/common");
const users = require("../db/data/user");

exports.insertStaticData = async () => {
  try {
    //insert some static data
    const dbUsers = await User.find();

    if (dbUsers.length === 0) {
      let userDocs = await User.insertMany(users);

      let dbCarts = await Cart.find();

      if (dbCarts.length === 0) {
        let cart = userDocs.map((user) => {
          return {
            userId: user._id.toString(),
            checkoutUrl: CONSTANTS.checkoutUrl,
          };
        });

        cart[0].order_state = 2;
        await Cart.insertMany(cart);
      }

      console.info('Data seeded')
    }
  } catch (error) {
    throw error;
  }
};
