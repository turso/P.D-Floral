const axios = require('axios');
const { Router } = require('express');
const router = Router();
const config = require('../utils/config');

router.route('/getPhotos').get(getPhotos);

function getPhotos(req, res) {
  getAllPhotos()
    .then(response => {
      // console.log('CLIENT DATA ON', response);
      res.status(200).json({ images: response.data });
    })
    .catch(e => {
      res.status(500);
    });
}

function getAllPhotos() {
  return new Promise((resolve, reject) => {
    getPhotosFromAPI()
      .then(res => {
        const photos = res.data;
        // console.log('KUVAT NÄYTTÄÄ TÄLTÄ', photos);
        resolve(photos);
      })
      .catch(e => {
        reject(e);
      });
  });
}

function getPhotosFromAPI() {
  return axios.get(
    `https://api.instagram.com/v1/users/self/media/recent/?access_token=${config.accessToken}`
  );
}

module.exports = {
  getAllPhotos: getAllPhotos,
  router: router
};
