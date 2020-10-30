import mongoose from 'mongoose'

import eventSchema from '../schemas/event'

const events = mongoose.model('events', eventSchema)

export default events
