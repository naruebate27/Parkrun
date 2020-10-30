import mongoose from 'mongoose'

import adminSchema from '../schemas/admin'

const admins = mongoose.model('admin', adminSchema)

export default admins
