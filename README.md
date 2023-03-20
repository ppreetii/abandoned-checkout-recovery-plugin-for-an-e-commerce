# Problem Definition

Build an abandoned checkout recovery plugin for an e-commerce business.
Use case:
A huge percentage of e-commerce customers add products to their cart and go to checkout but do not go through with the purchase. We need to build a tool to bring back these customers. E-commerce providers(shopify, woocommerce, etc) allow webhooks to be registered for multiple events, two of them being checkout abandonment & order placed. You have to build a tool that handles these webhook events and send out messages to customers on a predefined schedule(the schedule must be customizable), until all scheduled messages are sent or the user has placed an order.
Example:
A user comes in at 5:30 PM today and abandons their checkout. E-commerce provider's backend triggers a call to your pre-defined webhook with details of the checkout.
Your app has a predefined schedule as follows (T = Time of checkout abandonment)
T + 30 minutes (First message should be sent after 30 minutes have elapsed since the checkout was abandoned)
T + 1 day (Second message should be sent after 1 day has elapsed since the checkout was abandoned)
T + 3 days (Third message should be sent after 3 days have elapsed since the checkout was abandoned)
If a user places an order, subsequent messages should not be sent, i. e. if a cart was abandoned on 1 July, and the same customer places an order on 3 July, the third message should not be sent.

## `General Instructions`
- Install Packages

```
yarn
```
- Copy the contents of .env.example to .env , and add your credentials

- Start the Server

```
yarn start
```

## `Tech Stack Used`
- ### `Backend` : NodeJS , Express
- ### `Database` : MongoDb
- ### `ORM` : Mongoose
- ### `Sending Email` : @trycourier/courier
