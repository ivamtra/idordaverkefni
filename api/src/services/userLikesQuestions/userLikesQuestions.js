import { db } from 'src/lib/db'

export const userLikesQuestions = () => {
  return db.userLikesQuestion.findMany()
}

export const userLikesQuestion = ({ id }) => {
  return db.userLikesQuestion.findUnique({
    where: { id },
  })
}

export const createUserLikesQuestion = ({ input }) => {
  return db.userLikesQuestion.create({
    data: input,
  })
}

export const updateUserLikesQuestion = ({ id, input }) => {
  return db.userLikesQuestion.update({
    data: input,
    where: { id },
  })
}

export const deleteUserLikesQuestion = ({ id }) => {
  return db.userLikesQuestion.delete({
    where: { id },
  })
}

export const UserLikesQuestion = {
  user: (_obj, { root }) =>
    db.userLikesQuestion.findUnique({ where: { id: root.id } }).user(),
  question: (_obj, { root }) =>
    db.userLikesQuestion.findUnique({ where: { id: root.id } }).question(),
}
