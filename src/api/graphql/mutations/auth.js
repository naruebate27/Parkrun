import { config } from 'firebase-functions'
import { UserInputError } from 'apollo-server-express'
import passwordHash from 'password-hash'
import jwt from 'jsonwebtoken'
import { schemaComposer, graphql } from 'graphql-compose'

import users from '../../db/models/user'

const { secret: jwtSecret } = config().jwt

const { GraphQLObjectType, GraphQLString } = graphql

const login = schemaComposer.createResolver({
  name: 'login',
  type: new GraphQLObjectType({
    name: 'loginType',
    fields: {
      token: {
        type: GraphQLString,
      },
    },
  }),
  args: {
    email: 'String!',
    password: 'String!',
  },
  resolve: async ({ args }) => {
    const { email, password } = args
    const user = await users.findOne({ email })
    if (!user) {
      throw new UserInputError(`${email} ไม่ตรงกับผู้ใช้ใดๆ`)
    }
    const pass = user.password
    const hashedPassword = passwordHash.generate(pass)
    const isEqual = passwordHash.verify(password, hashedPassword)
    if (!isEqual) {
      throw new UserInputError('รหัสผ่านไม่ถูกต้อง')
    }
    const token = jwt.sign({ id: user._id, name: user.firstname, role: user.role }, jwtSecret, {
      expiresIn: '1h',
    })
    return { token }
  },
})

export {
  // eslint-disable-next-line import/prefer-default-export
  login,
}

