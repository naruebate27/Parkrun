import mongoose from 'mongoose'
import { config } from 'firebase-functions'

const { mongodb } = config()

mongoose.Promise = global.Promise

const connection = mongoose.connect(mongodb.uri, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.set('useCreateIndex', true)

connection
  .then((db) => db)
  .catch((err) => {
    console.log(err)
  })

export default connection
