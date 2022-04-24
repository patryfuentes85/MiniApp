const mongoose = require('mongoose');

const productSchema = {
    name: {
        type: String, 
        required: true 
    },
    price: {
        type: String, 
        required: true 
    },
    description: {
        type: String, 
        required: true 
    }, 
    image:{
        type: String,
        validate: {
            validator: function(url){
                return url.indexOf('.jpg') != -1;
            }, 
            message: "Only JPG pictures"
        }
    }

};

const schemaP = mongoose.Schema(productSchema);
const productsEx = mongoose.model('products', schemaP);
module.exports = productsEx;