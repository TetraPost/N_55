/* Mongoose */
const path = require('path');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const articleSchemeList = {
  articleTitle: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  articleContent: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 250,
  },
};

const articleScheme = new Schema(articleSchemeList, { timestamps: true });

const modelname = path.basename(__filename, '.js');
const model = mongoose.model(modelname, articleScheme);
module.exports = model;
