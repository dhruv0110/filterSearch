const mongoose = require('mongoose');
const Chat = require("./models/listing.js");
const Listing = require('./models/listing.js');



main().then(() => { console.log("connection successful!") })
  .catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/filter');
};

let allListing = [
  {
    title: "Cozy Cabin in the Woods",
    description: "Escape to nature in this charming cabin nestled among the trees. Perfect for a weekend getaway.",
    image: "https://plus.unsplash.com/premium_photo-1685133856065-a32643cc56d0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q296eSUyMENhYmluJTIwaW4lMjB0aGUlMjBXb29kc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "Modern Downtown Apartment",
    description: "Experience city life at its finest in this sleek and stylish apartment located in the heart of downtown.",
    image: "https://plus.unsplash.com/premium_photo-1661922394835-1defffc9524d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwZG93bnRvd24lMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "Seaside Villa with Panoramic Views",
    description: "Enjoy breathtaking ocean views from this luxurious villa perched on a cliff overlooking the sea.",
    image: "https://images.unsplash.com/photo-1559489031-fbaf8fe8e947?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2Vhc2lkZSUyMFZpbGxhJTIwd2l0aCUyMFBhbm9yYW1pYyUyMFZpZXdzfGVufDB8fDB8fHww"
  }
]

Listing.insertMany(allListing);