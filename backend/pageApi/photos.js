// const { getAllPhotos } = require('../routes/photoRoutes');

// // this route is for rendering /photos page
// module.exports = function(app, req, res) {
//   getAllPhotos()
//     .then(response => {
//       // store the photos info in res.locals
//       // then get the data in getInitialProps
//       res.locals.images = response.data;
//       // console.log('SERVER SIDE RESPONSE ON', response.data);
//       app.render(req, res, '/photos');
//     })
//     .catch(e => {
//       res.status(500);
//     });
// };
