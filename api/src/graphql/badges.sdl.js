export const schema = gql`
  type Badge {
    id: Int!
    imageUrl: String!
    title: String!
    description: String!
    UserHasBadge: [UserHasBadge]!
  }

  type Query {
    badges: [Badge!]! @requireAuth
    badge(id: Int!): Badge @requireAuth
  }

  input CreateBadgeInput {
    imageUrl: String!
    title: String!
    description: String!
  }

  input UpdateBadgeInput {
    imageUrl: String
    title: String
    description: String
  }

  type Mutation {
    createBadge(input: CreateBadgeInput!): Badge! @requireAuth
    updateBadge(id: Int!, input: UpdateBadgeInput!): Badge! @requireAuth
    deleteBadge(id: Int!): Badge! @requireAuth
  }
`
