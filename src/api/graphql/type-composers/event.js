import { composeWithMongoose } from 'graphql-compose-mongoose'

import events from '../../db/models/event'

const customizationOptions = {}

const eventsTC = composeWithMongoose(events, customizationOptions)

export default eventsTC
