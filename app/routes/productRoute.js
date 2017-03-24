var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

  app.get('/product/list', (req, res) => {
    var myRes = db
      .collection('products')
      .find()
			.sort({ title: 1 })
      .toArray((err, cursor) => {
        if(err)
          console.error(err);
          //console.log(cursor);
        res.json(cursor);
      });

  });

};
