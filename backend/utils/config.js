if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

let port = process.env.PORT;
let mongoUrl = process.env.MONGODB_URI;
let cookieKey = process.env.COOKIE_KEY;
let clientId = process.env.INSTAGRAM_CLIENT_ID;
let clientSecret = process.env.INSTAGRAM_CLIENT_SECRET;
let callbackUrl = process.env.INSTAGRAM_REDIRECT_URL;
let accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

if (process.env.NODE_ENV === 'test') {
  port = process.env.TEST_PORT;
  mongoUrl = process.env.TEST_MONGODB_URI;
}

module.exports = {
  mongoUrl,
  port,
  cookieKey,
  clientId,
  clientSecret,
  callbackUrl,
  accessToken
};
