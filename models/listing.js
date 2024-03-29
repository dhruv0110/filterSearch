const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        maxLength : 150,
    },
    image : {
        type : String,
    }

});

const Listing = mongoose.model("listing",listingSchema);

module.exports = Listing;
