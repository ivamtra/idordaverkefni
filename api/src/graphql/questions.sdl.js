export const schema = gql`
  type Question {
    id: Int!
    title: String!
    language: String!
    definition: String!
    other_info: String
    user: User!
    userId: Int!
    createdAt: DateTime!
    Sentence: [Sentence]!
    Answer: [Answer]!
    UserLikesQuestion: [UserLikesQuestion]!
    UserLikesComment: [UserLikesComment]!
    Issue: [Issue]!
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
  }

  input UpdateQuestionInput {
    title: String
    language: String
    definition: String
    other_info: String
    userId: Int
  }

  type Mutation {
    createQuestion(input: CreateQuestionInput!): Question! @requireAuth
    updateQuestion(id: Int!, input: UpdateQuestionInput!): Question!
      @requireAuth
    deleteQuestion(id: Int!): Question! @requireAuth
  }
`
