export const schema = gql`
  type UserLikesQuestion {
    id: Int!
    user: User!
    userId: Int!
    action: Int!
    question: Question!
    questionId: Int!
    dateTime: DateTime!
  }

  type Query {
    userLikesQuestions: [UserLikesQuestion!]! @requireAuth
    userLikesQuestion(id: Int!): UserLikesQuestion @requireAuth
  }

  input CreateUserLikesQuestionInput {
    userId: Int!
    action: Int!
    questionId: Int!
    dateTime: DateTime!
  }

  input UpdateUserLikesQuestionInput {
    userId: Int
    action: Int
    questionId: Int
    dateTime: DateTime
  }

  type Mutation {
    createUserLikesQuestion(
      input: CreateUserLikesQuestionInput!
    ): UserLikesQuestion! @requireAuth
    updateUserLikesQuestion(
      id: Int!
      input: UpdateUserLikesQuestionInput!
    ): UserLikesQuestion! @requireAuth
    deleteUserLikesQuestion(id: Int!): UserLikesQuestion! @requireAuth
  }
`
