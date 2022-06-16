import { db } from 'src/lib/db'

export const questions = () => {
  return db.question.findMany()
}

export const question = ({ id }) => {
  return db.question.findUnique({
    where: { id },
  })
}

export const createQuestion = ({ input }) => {
  return db.question.create({
    data: input,
  })
}

export const updateQuestion = ({ id, input }) => {
  return db.question.update({
    data: input,
    where: { id },
  })
}

export const deleteQuestion = ({ id }) => {
  return db.question.delete({
    where: { id },
  })
}

export const Question = {
  sentences: (_obj, { root }) =>
    db.question.findUnique({ where: { id: root.id } }).sentences(),
  user: (_obj, { root }) =>
    db.question.findUnique({ where: { id: root.id } }).user(),
  Answer: (_obj, { root }) =>
    db.question.findUnique({ where: { id: root.id } }).Answer(),
  UserLikesQuestion: (_obj, { root }) =>
    db.question.findUnique({ where: { id: root.id } }).UserLikesQuestion(),
  Issue: (_obj, { root }) =>
    db.question.findUnique({ where: { id: root.id } }).Issue(),
  UserLikesComment: (_obj, { root }) =>
    db.question.findUnique({ where: { id: root.id } }).UserLikesComment(),
  Category: (_obj, { root }) =>
    db.question.findUnique({ where: { id: root.id } }).Category(),
  questionIsInCategory: (_obj, { root }) =>
    db.question.findUnique({ where: { id: root.id } }).questionIsInCategory(),
}
