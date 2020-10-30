import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
  userId: {
    type: mongoose.ObjectId,
    index: true,
  },
  email: {
    type: 'String',
    required: true,
    index: true,
  },
  firstname: String,
  lastname: String,
  birthDate: Date,
  password: String,
  gender: String,
  photo: String,
  role: {
    type: String,
    default: 'USER',
    enum: ['USER', 'ORGANIZER'],
  },
  token: String,
}, { timestamps: true })

export default userSchema
