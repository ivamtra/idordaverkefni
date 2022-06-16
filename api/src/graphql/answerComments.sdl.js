export const schema = gql`
  type AnswerComment {
    id: Int!
    body: String!
    user: User!
    userId: Int!
    parentId: Int
    answer: Answer!
    answerId: Int!
    createdAt: DateTime!
    Issue: [Issue]!
  }

  type Query {
    answerComments: [AnswerComment!]! @requireAuth
    answerComment(id: Int!): AnswerComment @requireAuth
  }

  input CreateAnswerCommentInput {
    body: String!
    userId: Int!
    parentId: Int
    answerId: Int!
  }

  input UpdateAnswerCommentInput {
    body: String
    userId: Int
    parentId: Int
    answerId: Int
  }

  type Mutation {
    createAnswerComment(input: CreateAnswerCommentInput!): AnswerComment!
      @requireAuth
    updateAnswerComment(
      id: Int!
      input: UpdateAnswerCommentInput!
    ): AnswerComment! @requireAuth
    deleteAnswerComment(id: Int!): AnswerComment! @requireAuth
  }
`
