export const schema = gql`
  type Category {
    id: Int!
    titill: String!
    litur: String!
    Question: [Question]!
    QuestionIsInCategory: [QuestionIsInCategory]!
  }

  type Query {
    categories: [Category!]! @requireAuth
    category(id: Int!): Category @requireAuth
  }

  input CreateCategoryInput {
    titill: String!
    litur: String!
  }

  input UpdateCategoryInput {
    titill: String
    litur: String
  }

  type Mutation {
    createCategory(input: CreateCategoryInput!): Category! @requireAuth
    updateCategory(id: Int!, input: UpdateCategoryInput!): Category!
      @requireAuth
    deleteCategory(id: Int!): Category! @requireAuth
  }
`
