import eventsTC from '../type-composers/event'

const eventById = eventsTC.getResolver('findById')
const eventByIds = eventsTC.getResolver('findByIds')
const eventOne = eventsTC.getResolver('findOne')
const eventMany = eventsTC.getResolver('findMany')
const eventCount = eventsTC.getResolver('count')
const eventConnection = eventsTC.getResolver('connection')
const eventPagination = eventsTC.getResolver('pagination')

export {
  eventById,
  eventByIds,
  eventOne,
  eventMany,
  eventCount,
  eventConnection,
  eventPagination,
}
