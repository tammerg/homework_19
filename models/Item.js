var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema ({
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  product: {
    type : String,
    required: true
  },
  price: {
    type : Number,
    required: true
  },
  date:{
    type: Date,
    default : Date.now()
  },
});

var Item = mongoose.model('Item', itemSchema);
module.exports = Item;
