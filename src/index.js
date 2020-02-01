const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
type Query {
    info: String!
    feed: [Link!]!
}

type Link {
    id: ID!
    description: Sting!
    url: String!
}
`

const resolvers = {
    Query: {
        info: () => null
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))