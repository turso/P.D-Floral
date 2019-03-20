const axios = require('axios');
const photoRouter = require('express').Router();
const config = require('../utils/config');

photoRouter.get('/', async (req, res) => {
  try {
    const data = await axios.get(
      `https://api.instagram.com/v1/users/self/media/recent/?&count=33&access_token=${config.accessToken}`
    );
    console.log('DAtA ON', data.data);
    res.send(data.data.data);
  } catch (exception) {
    res.status(500).send({ error: 'image fetching failed from instagram' });
  }
});

module.exports = photoRouter;
