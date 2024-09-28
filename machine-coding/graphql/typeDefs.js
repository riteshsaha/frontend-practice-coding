// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = `#graphql

    type Book {
        id: ID!
        title: String!
        publishedYear: Int
        author: Author
    }

    type Author {
        id: ID!
        name: String!
        books: [Book]
    }

    type Query {
        books: [Book]
        authors: [Author]
    }

    type Mutation {
        addBook(title: String!, publishedYear: Int, authorId: ID!): Book!
    }
`;