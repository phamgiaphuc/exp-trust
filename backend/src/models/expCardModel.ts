const mongoose = require("mongoose"); // Erase if already required

const DOCUMENT_NAME = "Cards";
const COLLECTION_NAME = "expCards";

var userSchema = new mongoose.Schema({
  verify: { type: String },
  title: { type: String },
  exp: { type: Number },
  provider: { type: String },
  date: { type: String },
}, {timestamps: true,
    collection: COLLECTION_NAME});


export default mongoose.model(DOCUMENT_NAME, userSchema);
