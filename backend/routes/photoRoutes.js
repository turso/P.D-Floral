const axios = require('axios');
const photoRouter = require('express').Router();
const config = require('../utils/config');

// function getPhotos(req, res) {
//   getAllPhotos()
//     .then(response => {
//       // console.log('CLIENT DATA ON', response);
//       res.status(200).json({ images: response.data });
//     })
//     .catch(e => {
//       res.status(500);
//     });
// }

// function getAllPhotos() {
//   return new Promise((resolve, reject) => {
//     getPhotosFromAPI()
//       .then(res => {
//         const photos = res.data;
//         // console.log('KUVAT NÄYTTÄÄ TÄLTÄ', photos);
//         resolve(photos);
//       })
//       .catch(e => {
//         reject(e);
//       });
//   });
// }

photoRouter.get('/', async (req, res) => {
  const data = await axios.get(
    `https://api.instagram.com/v1/users/self/media/recent/?access_token=${config.accessToken}`
  );
  console.log('DAtA ON', data.data);
  res.send(data.data.data);
  // console.log('DATA ON', data.data);
  // res(data);
  // return axios.get(
  //   `https://api.instagram.com/v1/users/self/media/recent/?access_token=${config.accessToken}`
  // );
});

// function getPhotosFromAPI() {
//   return axios.get(
//     `https://api.instagram.com/v1/users/self/media/recent/?access_token=${config.accessToken}`
//   );
// }

module.exports = photoRouter;
