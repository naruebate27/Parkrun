import * as auth from './auth'
import * as events from './event'
import * as regies from './regis'
import * as users from './user'

const mutations = {
  ...auth,
  ...events,
  ...regies,
  ...users,
}

export default mutations
