export const schema = gql`
  type UserIsInGroup {
    id: Int!
    user: User!
    userId: Int!
    group: Group!
    groupId: Int!
    timeJoined: DateTime!
  }

  type Query {
    userIsInGroups: [UserIsInGroup!]! @requireAuth
    userIsInGroup(id: Int!): UserIsInGroup @requireAuth
  }

  input CreateUserIsInGroupInput {
    userId: Int!
    groupId: Int!
    timeJoined: DateTime!
  }

  input UpdateUserIsInGroupInput {
    userId: Int
    groupId: Int
    timeJoined: DateTime
  }

  type Mutation {
    createUserIsInGroup(input: CreateUserIsInGroupInput!): UserIsInGroup!
      @requireAuth
    updateUserIsInGroup(
      id: Int!
      input: UpdateUserIsInGroupInput!
    ): UserIsInGroup! @requireAuth
    deleteUserIsInGroup(id: Int!): UserIsInGroup! @requireAuth
  }
`
