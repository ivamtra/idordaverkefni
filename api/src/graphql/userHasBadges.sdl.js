export const schema = gql`
  type UserHasBadge {
    id: Int!
    user: User!
    userId: Int!
    badge: Badge!
    badgeId: Int!
    dateTime: DateTime!
  }

  type Query {
    userHasBadges: [UserHasBadge!]! @requireAuth
    userHasBadge(id: Int!): UserHasBadge @requireAuth
  }

  input CreateUserHasBadgeInput {
    userId: Int!
    badgeId: Int!
    dateTime: DateTime!
  }

  input UpdateUserHasBadgeInput {
    userId: Int
    badgeId: Int
    dateTime: DateTime
  }

  type Mutation {
    createUserHasBadge(input: CreateUserHasBadgeInput!): UserHasBadge!
      @requireAuth
    updateUserHasBadge(
      id: Int!
      input: UpdateUserHasBadgeInput!
    ): UserHasBadge! @requireAuth
    deleteUserHasBadge(id: Int!): UserHasBadge! @requireAuth
  }
`
