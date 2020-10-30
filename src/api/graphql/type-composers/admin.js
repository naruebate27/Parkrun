import { composeWithMongoose } from 'graphql-compose-mongoose'

import admins from '../../db/models/admin'

const customizationOptions = {}

const adminsTC = composeWithMongoose(admins, customizationOptions)

export default adminsTC
