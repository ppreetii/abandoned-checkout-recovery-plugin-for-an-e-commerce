const { Router } = require("express");
const API = require("../../constants/api");
const webhookController = require('../../controllers/v1/webhook');

const router = Router();

router.post(`${API.WEBHOOK}${API.ABANDONED_CHECKOUT}`, webhookController.checkoutAbandoned);

module.exports = router;