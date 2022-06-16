export const schema = gql`
  type Translation {
    id: Int!
    translation: String!
    answer: Answer!
    answerId: Int!
  }

  type Query {
    translations: [Translation!]! @requireAuth
    translation(id: Int!): Translation @requireAuth
  }

  input CreateTranslationInput {
    translation: String!
    answerId: Int!
  }

  input UpdateTranslationInput {
    translation: String
    answerId: Int
  }

  type Mutation {
    createTranslation(input: CreateTranslationInput!): Translation! @requireAuth
    updateTranslation(id: Int!, input: UpdateTranslationInput!): Translation!
      @requireAuth
    deleteTranslation(id: Int!): Translation! @requireAuth
  }
`
