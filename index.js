const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main().then(() => { console.log("connection successful!") })
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/filter");
}

app.get("/listings", async (req, res) => {
    let listing = await Listing.find();
    res.render("index.ejs", { listing });
});


// add functionality word by word search
app.post("/listings", async (req, res) => {
    let { search } = req.body;
    if (search.trim() === "") {
        res.redirect("/listings");
    } else {
        // Split the search string into individual words
        const searchWords = search.trim().split(/\s+/);

        // Create an array to store individual word queries
        const wordQueries = searchWords.map(word => ({
            title: { $regex: new RegExp(word, 'i') } // 'i' for case-insensitive search
        }));

        // Find listings where any word matches in the title
        let newListing = await Listing.find({ $or: wordQueries });
        res.render("filterListings.ejs", { newListing });
    }
});

app.listen(8080, () => {
    console.log("server is listening");
})

