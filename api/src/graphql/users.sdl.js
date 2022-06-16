export const schema = gql`
  type User {
    id: Int!
    email: String!
    name: String
    createdAt: DateTime!
    roles: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    imageUrl: String
    Question: [Question]!
    Answer: [Answer]!
    AnswerComment: [AnswerComment]!
    UserLikesAnswer: [UserLikesAnswer]!
    UserLikesQuestion: [UserLikesQuestion]!
    UserHasBadge: [UserHasBadge]!
    UserIsInGroup: [UserIsInGroup]!
    UserLikesComment: [UserLikesComment]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    name: String
    roles: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    imageUrl: String
  }

  input UpdateUserInput {
    email: String
    name: String
    roles: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    imageUrl: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
