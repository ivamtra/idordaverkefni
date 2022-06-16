import { db } from 'src/lib/db'

export const userLikesAnswers = () => {
  return db.userLikesAnswer.findMany()
}

export const userLikesAnswer = ({ id }) => {
  return db.userLikesAnswer.findUnique({
    where: { id },
  })
}

export const createUserLikesAnswer = ({ input }) => {
  return db.userLikesAnswer.create({
    data: input,
  })
}

export const updateUserLikesAnswer = ({ id, input }) => {
  return db.userLikesAnswer.update({
    data: input,
    where: { id },
  })
}

export const deleteUserLikesAnswer = ({ id }) => {
  return db.userLikesAnswer.delete({
    where: { id },
  })
}

export const UserLikesAnswer = {
  user: (_obj, { root }) =>
    db.userLikesAnswer.findUnique({ where: { id: root.id } }).user(),
  answer: (_obj, { root }) =>
    db.userLikesAnswer.findUnique({ where: { id: root.id } }).answer(),
}
