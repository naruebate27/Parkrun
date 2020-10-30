const mongoose = require('mongoose')

const { Schema } = mongoose

const eventSchema = new Schema({
  eventId: mongoose.ObjectId,
  name: {
    type: String,
    unique: true,
  },
  slug: {
    type: String,
    index: true,
    unique: true,
  },
  organizId: mongoose.ObjectId,
  startTime: Date,
  endTime: Date,
  haveChipTime: Boolean,
  checkpoints: [{
    position: Number,
    cutOffTime: Date,
    name: String,
    distance: Number,
  }],
  deleted: {
    type: 'Boolean',
    default: false,
    index: true,
  },
})

export default eventSchema
