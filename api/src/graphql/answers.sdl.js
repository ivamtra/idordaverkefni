export const schema = gql`
  type Answer {
    id: Int!
    title: String!
    justification: String!
    user: User!
    userId: Int!
    createdAt: DateTime!
    question: Question!
    questionId: Int!
    UserLikesAnswer: [UserLikesAnswer]!
    AnswerComment: [AnswerComment]!
    translations: [Translation]!
    Issue: [Issue]!
  }

  type Query {
    answers: [Answer!]! @requireAuth
    answer(id: Int!): Answer @requireAuth
  }

  input CreateAnswerInput {
    title: String!
    justification: String!
    userId: Int!
    questionId: Int!
  }

  input UpdateAnswerInput {
    title: String
    justification: String
    userId: Int
    questionId: Int
  }

  type Mutation {
    createAnswer(input: CreateAnswerInput!): Answer! @requireAuth
    updateAnswer(id: Int!, input: UpdateAnswerInput!): Answer! @requireAuth
    deleteAnswer(id: Int!): Answer! @requireAuth
  }
`
