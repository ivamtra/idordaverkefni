export const schema = gql`
  type Question {
    id: Int!
    title: String!
    sentences: [Sentence]!
    language: String!
    definition: String!
    other_info: String
    user: User!
    userId: Int!
    createdAt: DateTime!
    Answer: [Answer]!
    UserLikesQuestion: [UserLikesQuestion]!
    Issue: [Issue]!
    UserLikesComment: [UserLikesComment]!
    Category: Category
    categoryId: Int
    QuestionIsInCategory: [QuestionIsInCategory]!
  }

  type Query {
    questions: [Question!]! @requireAuth
    question(id: Int!): Question @requireAuth
  }

  input CreateQuestionInput {
    title: String!
    language: String!
    definition: String!
    other_info: String
    userId: Int!
    categoryId: Int
  }

  input UpdateQuestionInput {
    title: String
    language: String
    definition: String
    other_info: String
    userId: Int
    categoryId: Int
  }

  type Mutation {
    createQuestion(input: CreateQuestionInput!): Question! @requireAuth
    updateQuestion(id: Int!, input: UpdateQuestionInput!): Question!
      @requireAuth
    deleteQuestion(id: Int!): Question! @requireAuth
  }
`
