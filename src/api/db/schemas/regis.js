import { Schema } from 'mongoose'

const regisSchema = new Schema({
  eventid: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
  },
  runnerid: {
    type: Schema.Types.ObjectId,
    ref: 'Runner',
  },
},
{ timestamps: true })

export default regisSchema
