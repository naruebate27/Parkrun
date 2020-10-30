import { composeWithMongoose } from 'graphql-compose-mongoose'

import regies from '../../db/models/regis'

const customizationOptions = {}

const regiesTC = composeWithMongoose(regies, customizationOptions)

export default regiesTC
