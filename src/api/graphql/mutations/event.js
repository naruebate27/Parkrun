import eventTC from '../type-composers/event'

const createEvent = eventTC.getResolver('createOne')
const updateEvent = eventTC.getResolver('updateById')
const removeEvent = eventTC.getResolver('removeById')

export {
  createEvent,
  updateEvent,
  removeEvent,
}
