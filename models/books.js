const mongoose = require("mongoose");
// let db = "../models/workout.js";

const Schema = mongoose.Schema;

// title, authors, description, image, link

const googlebooks = new Schema({
    books: [
      {
        title: {
          type: String,
          trim: true,
          required: "Enter the title of the book",
        },
        author: {
          type: String,
          trim: true,
          required: "Enter the author of the book  ",
        },

        description: {
          type: String,
          trim: true,
          required: "Enter the description of the book  ",
        },

        // note: the following two are links and might require unique syntax

        image: {
          type: String,
          trim: true,
          required: "Enter the image of the book  ",
        },
        link: {
          type: String,
          trim: true,
          required: "Enter the link of the book  ",
        },
      },
    ],
  }),
  googlebooks = mongoose.model("googlebooks", googlebooksSchema);

module.exports = googlebooks;
