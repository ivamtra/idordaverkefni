import { db } from 'src/lib/db'

export const questionIsInCategories = () => {
  return db.questionIsInCategory.findMany()
}

export const questionIsInCategory = ({ id }) => {
  return db.questionIsInCategory.findUnique({
    where: { id },
  })
}

export const createQuestionIsInCategory = ({ input }) => {
  return db.questionIsInCategory.create({
    data: input,
  })
}

export const updateQuestionIsInCategory = ({ id, input }) => {
  return db.questionIsInCategory.update({
    data: input,
    where: { id },
  })
}

export const deleteQuestionIsInCategory = ({ id }) => {
  return db.questionIsInCategory.delete({
    where: { id },
  })
}

export const QuestionIsInCategory = {
  question: (_obj, { root }) =>
    db.questionIsInCategory.findUnique({ where: { id: root.id } }).question(),
  category: (_obj, { root }) =>
    db.questionIsInCategory.findUnique({ where: { id: root.id } }).category(),
}
