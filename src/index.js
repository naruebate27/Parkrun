import * as functions from 'firebase-functions'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import mongoose from 'mongoose'

import './api/db/db'
import schema from './api/graphql'

const { is_dev: isDev, cors } = functions.config()


const app = express()

// admin.initializeApp()
const server = new ApolloServer({
  schema,
  cors,
  playground: isDev,
  introspection: true,
  tracing: true,
  path: '/',
})

server.applyMiddleware({
  app,
  path: '/',
  cors,
  onHealthCheck: () => new Promise((resolve, reject) => {
    if (mongoose.connection.readyState > 0) {
      resolve()
    } else {
      reject()
    }
  }),
})

// app.listen({ port: process.env.PORT }, () => {
//   console.log(`🚀 Server listening on port ${process.env.PORT}`)
//   // console.log(`😷 Health checks available at ${process.env.HEALTH_ENDPOINT}`);
// })

// eslint-disable-next-line import/prefer-default-export
export const api = functions
  .runWith({ vpcConnector: 'parkrun', vpcConnectorEgressSettings: 'ALL_TRAFFIC' })
  .region('asia-southeast2')
  .https.onRequest(app)
