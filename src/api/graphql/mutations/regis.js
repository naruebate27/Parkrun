import regiesTC from '../type-composers/regis'

const createRegis = regiesTC.getResolver('createOne')
const updateRegis = regiesTC.getResolver('updateById')
const removeRegis = regiesTC.getResolver('removeById')

export {
  createRegis,
  updateRegis,
  removeRegis,
}
