const mongoose = require("mongoose");

const app = require("./app")();
const config = require("./src/configs/config");
const { mongoDbUrl } = require("./src/configs/dbConfig");

const { insertStaticData } = require("./src/utils/seedData");

const initializeDbAndStartServer = async () => {
  try {
    // Connect to the database
    await mongoose.connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.info(`Database connected!`);

    await insertStaticData();

    app.listen(config.port);
    console.info(`Server listens on port ${config.port}`);
  } catch (error) {
    throw error;
  }
};

initializeDbAndStartServer();
