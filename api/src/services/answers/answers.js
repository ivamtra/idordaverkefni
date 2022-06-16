import { db } from 'src/lib/db'

export const answers = () => {
  return db.answer.findMany()
}

export const answer = ({ id }) => {
  return db.answer.findUnique({
    where: { id },
  })
}

export const createAnswer = ({ input }) => {
  return db.answer.create({
    data: input,
  })
}

export const updateAnswer = ({ id, input }) => {
  return db.answer.update({
    data: input,
    where: { id },
  })
}

export const deleteAnswer = ({ id }) => {
  return db.answer.delete({
    where: { id },
  })
}

export const Answer = {
  user: (_obj, { root }) =>
    db.answer.findUnique({ where: { id: root.id } }).user(),
  question: (_obj, { root }) =>
    db.answer.findUnique({ where: { id: root.id } }).question(),
  UserLikesAnswer: (_obj, { root }) =>
    db.answer.findUnique({ where: { id: root.id } }).UserLikesAnswer(),
  AnswerComment: (_obj, { root }) =>
    db.answer.findUnique({ where: { id: root.id } }).AnswerComment(),
  translations: (_obj, { root }) =>
    db.answer.findUnique({ where: { id: root.id } }).translations(),
  Issue: (_obj, { root }) =>
    db.answer.findUnique({ where: { id: root.id } }).Issue(),
}
