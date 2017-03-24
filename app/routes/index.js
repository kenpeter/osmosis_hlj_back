// get routes
const productRoutes = require('./productRoutes');

// module exports func
module.exports = function(app, db) {
  // call the routes
  productRoutes(app, db);
  // Other route groups could go here, in the future
};
