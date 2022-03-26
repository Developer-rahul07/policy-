const mongoose = require("mongoose");

const PolicySchema = new mongoose.Schema({
  uname: {
    type: String,
    required: true,
  },
  fname: {
    type: String,
    required: true,
  },
  mname: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    maxlength: 13,
  },
  policynumber: {
    type: String,
    required: true,
  },
  policydate: {
    type: String,
    required: true,
  },
  caddress: {
    type: String,
    required: true,
  },
  paddress: {
    type: String,
    required: true,
  },
  licplan: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },

  primiumdate: {
    type: Date,
    default: Date.now,
  },

  primiumamount: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Policy = mongoose.model("Policy", PolicySchema);

module.exports = Policy;
