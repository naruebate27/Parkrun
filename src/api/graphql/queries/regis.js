import regiesTC from '../type-composers/regis'

const regisById = regiesTC.getResolver('findById')
const regisByIds = regiesTC.getResolver('findByIds')
const regisOne = regiesTC.getResolver('findOne')
const regisMany = regiesTC.getResolver('findMany')
const regisCount = regiesTC.getResolver('count')
const regisConnection = regiesTC.getResolver('connection')
const regisPagination = regiesTC.getResolver('pagination')

export {
  regisById,
  regisByIds,
  regisOne,
  regisMany,
  regisCount,
  regisConnection,
  regisPagination,
}
