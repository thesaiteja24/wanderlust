const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// An errore I faced and its solution :https://chatgpt.com/share/999967da-9790-45ac-b146-e2968ec911fd

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: {
      type: String,
      default: 'default_image_filename',
    },
    url: {
      type: String,
      default: 'https://unsplash.com/photos/a-sandy-beach-with-palm-trees-in-the-background-c6viAKoV28Q?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
      set: (v) =>
        v === ''
          ? 'https://unsplash.com/photos/a-sandy-beach-with-palm-trees-in-the-background-c6viAKoV28Q?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash'
          : v,
    },
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
