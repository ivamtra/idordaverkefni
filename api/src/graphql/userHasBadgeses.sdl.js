export const schema = gql`
  type UserHasBadges {
    id: Int!
    user: User!
    userId: Int!
    badge: Badge!
    badgeId: Int!
    dateTime: DateTime!
  }

  type Query {
    userHasBadgeses: [UserHasBadges!]! @requireAuth
    userHasBadges(id: Int!): UserHasBadges @requireAuth
  }

  input CreateUserHasBadgesInput {
    userId: Int!
    badgeId: Int!
    dateTime: DateTime!
  }

  input UpdateUserHasBadgesInput {
    userId: Int
    badgeId: Int
    dateTime: DateTime
  }

  type Mutation {
    createUserHasBadges(input: CreateUserHasBadgesInput!): UserHasBadges!
      @requireAuth
    updateUserHasBadges(
      id: Int!
      input: UpdateUserHasBadgesInput!
    ): UserHasBadges! @requireAuth
    deleteUserHasBadges(id: Int!): UserHasBadges! @requireAuth
  }
`
