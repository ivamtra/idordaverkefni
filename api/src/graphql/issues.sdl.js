export const schema = gql`
  type Issue {
    id: Int!
    question: Question!
    answer: Answer!
    answerComment: AnswerComment!
    description: String!
    questionId: Int!
    answerId: Int!
    answerCommentId: Int!
  }

  type Query {
    issues: [Issue!]! @requireAuth
    issue(id: Int!): Issue @requireAuth
  }

  input CreateIssueInput {
    description: String!
    questionId: Int!
    answerId: Int!
    answerCommentId: Int!
  }

  input UpdateIssueInput {
    description: String
    questionId: Int
    answerId: Int
    answerCommentId: Int
  }

  type Mutation {
    createIssue(input: CreateIssueInput!): Issue! @requireAuth
    updateIssue(id: Int!, input: UpdateIssueInput!): Issue! @requireAuth
    deleteIssue(id: Int!): Issue! @requireAuth
  }
`
