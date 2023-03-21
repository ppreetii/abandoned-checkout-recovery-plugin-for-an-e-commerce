module.exports = {
  ORDER_STATES: {
    ADDED_TO_CART: 1,
    ABANDONED_CART: 2
  },
  MSG_SCHEDULE: [
    30 * 60 * 1000, // 30 minutes
    24 * 60 * 60 * 1000, // 1 day
    3 * 24 * 60 * 60 * 1000, // 3 days
  ],
  MSG_TEMPLATES: [
    {
      subject: "You left something behind in your cart",
      body: "Hi {{customerName}}, you left some items in your cart. Click here to complete your purchase: {{checkoutUrl}}",
    },
    {
      subject: "Complete your purchase now",
      body: "Hi {{customerName}}, you still have items in your cart. Click here to complete your purchase: {{checkoutUrl}}",
    },
    {
      subject: "Last chance to complete your purchase",
      body: "Hi {{customerName}}, this is your last chance to complete your purchase. Click here to checkout now: {{checkoutUrl}}",
    },
  ],
  checkoutUrl:"https://jsmith.myshopify.com/548380009/orders/b1946ac92492d2347c6235b4d2611184/authenticate?key=imasecretipod",
};
