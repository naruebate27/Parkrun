import mongoose from 'mongoose'

import regisSchema from '../schemas/regis'

const regis = mongoose.model('regis', regisSchema)

export default regis
