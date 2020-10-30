import { schemaComposer } from 'graphql-compose'

import queries from './queries/index'
import mutations from './mutations/index'

schemaComposer.Query.addFields(queries)
schemaComposer.Mutation.addFields(mutations)

const graphqlSchema = schemaComposer.buildSchema()

export default graphqlSchema
