export const schema = gql`
  type Group {
    id: Int!
    name: String!
    imageUrl: String!
    createdAt: DateTime!
    UserIsInGroup: [UserIsInGroup]!
  }

  type Query {
    groups: [Group!]! @requireAuth
    group(id: Int!): Group @requireAuth
  }

  input CreateGroupInput {
    name: String!
    imageUrl: String!
  }

  input UpdateGroupInput {
    name: String
    imageUrl: String
  }

  type Mutation {
    createGroup(input: CreateGroupInput!): Group! @requireAuth
    updateGroup(id: Int!, input: UpdateGroupInput!): Group! @requireAuth
    deleteGroup(id: Int!): Group! @requireAuth
  }
`
