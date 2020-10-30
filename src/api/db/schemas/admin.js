const mongoose = require('mongoose')

const { Schema } = mongoose

const adminSchema = new Schema({
  id: Number,
  username: String,
  firstname: String,
  lastname: String,
  refreshToken: String,
  accesstoken: String,
  password: { type: String },
})

export default adminSchema
