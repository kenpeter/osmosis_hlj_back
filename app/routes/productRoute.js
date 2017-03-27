var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

  app.get('/product/list', (req, res) => {
    var limit = req.query.limit;

    if(limit) {
			limit = parseInt(limit);
		}
		else {
			limit = 0;
		}

    var myRes = db
      .collection('products')
      .find()
      .limit(limit)
			.sort({ title: 1 })
      .toArray((err, cursor) => {
        if(err)
          console.error(err);
          //console.log(cursor);
        res.json(cursor);
      });

  });


	app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) }; 
    db.collection('products').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });


};
