const mongoose = require("mongoose");

const app = require("./app")();
const config = require("./src/configs/config");
const { mongoDbUrl } = require("./src/configs/dbConfig");

const { seedUsers } = require("./src/utils/seedData");

const initializeDbAndStartServer = async () => {
  try {
    // Connect to the database
    await mongoose.connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.info(`Database connected!`);

    await seedUsers();

    app.listen(config.port);
    console.info(`Server listens on port ${config.port}`);
    /*
    await webhookServices.checkoutAbandoned(cartId, userId, checkoutUrl);
    -> This should be invoked using event-based communication,but to implement webhook working as task, a rest api has been implemented
    to run the schedules
    */

  } catch (error) {
    throw error;
  }
};

initializeDbAndStartServer();
