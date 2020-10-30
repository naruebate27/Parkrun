import usersTC from '../type-composers/user'

const userById = usersTC.getResolver('findById')
const userByIds = usersTC.getResolver('findByIds')
const userOne = usersTC.getResolver('findOne')
const userMany = usersTC.getResolver('findMany')
const userCount = usersTC.getResolver('count')
const userConnection = usersTC.getResolver('connection')
const userPagination = usersTC.getResolver('pagination')

export {
  userById,
  userByIds,
  userOne,
  userMany,
  userCount,
  userConnection,
  userPagination,
}
