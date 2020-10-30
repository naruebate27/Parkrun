import passwordHash from 'password-hash'
import { schemaComposer, Resolver, graphql } from 'graphql-compose'

import usersTC from '../type-composers/user'
import users from '../../db/models/user'

const { GraphQLString, GraphQLInt } = graphql

const setPassword = new Resolver({
  name: 'setPassword',
  type: usersTC.getType(),
  args: {
    userid: GraphQLInt,
    password: GraphQLString,
    username: GraphQLString,
    // token: GraphQLString,
  },
  resolve: async ({ args }) => {
    const {
      userid, password, username,
    } = args
    const hashedPassword = passwordHash.generate(password)
    console.log(hashedPassword)
    console.log({ userid }, { username })
    const userName = await users.findOne({ username })
    if (userName) {
      throw new Error('username already')
    }
    const user = await users.findOneAndUpdate({ userid }, { password: hashedPassword, username })
    // const update = await activity.updateactivity(id, token)
    // if(update){
    //   console.log('true')
    // }
    if (!user) {
      throw new Error('User not found')
    }
    return user
  },
}, schemaComposer)

// const createUser = new Resolver({
//   name: 'createUser',
//   type: runnersTC.getType(),
//   args: {
//     email: 'String',
//     password: 'String',
//   },
//   resolve: async ({ args }) => {
//     console.log(args)
//     try {
//       const user = await admin.auth().createUser({
//         email: args.email,
//         password: args.password,
//       })
//       const data = {
//         username: args.email,
//         password: args.password,
//         uid: user.uid,
//       }
//       const runner = await runners.create(data)
//       return runner
//     } catch (e) {
//       throw e
//     }
//   },

// }, schemaComposer)
const createUser = usersTC.getResolver('createOne')
const updateUser = usersTC.getResolver('updateById')
const removeUser = usersTC.getResolver('removeById')

export {
  createUser,
  updateUser,
  removeUser,
  setPassword,
  // createUser,
}
