export const schema = gql`
  type QuestionIsInCategory {
    id: Int!
    question: Question!
    category: Category!
    questionId: Int!
    categoryId: Int!
  }

  type Query {
    questionIsInCategories: [QuestionIsInCategory!]! @requireAuth
    questionIsInCategory(id: Int!): QuestionIsInCategory @requireAuth
  }

  input CreateQuestionIsInCategoryInput {
    questionId: Int!
    categoryId: Int!
  }

  input UpdateQuestionIsInCategoryInput {
    questionId: Int
    categoryId: Int
  }

  type Mutation {
    createQuestionIsInCategory(
      input: CreateQuestionIsInCategoryInput!
    ): QuestionIsInCategory! @requireAuth
    updateQuestionIsInCategory(
      id: Int!
      input: UpdateQuestionIsInCategoryInput!
    ): QuestionIsInCategory! @requireAuth
    deleteQuestionIsInCategory(id: Int!): QuestionIsInCategory! @requireAuth
  }
`
