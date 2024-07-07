const mongoose = require("mongoose"); // Erase if already required

const DOCUMENT_NAME = "Cards";
const COLLECTION_NAME = "expCards";

const userSchema = new mongoose.Schema(
  {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  position: {
    type: String, 
    required: true,
  },
  total_experience: {
    type: Number,
    required: true,
  },
  begin_date: {type: Date},
  end_date: {type: Date},
  status: {
    type: String,
    default: 'pending'
  },
  note: {type: String},
  proof_file: {type: String},
  },
  { timestamps: true, collection: COLLECTION_NAME }
);

export default mongoose.model(DOCUMENT_NAME, userSchema);
