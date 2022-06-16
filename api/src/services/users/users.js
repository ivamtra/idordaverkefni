import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const createUser = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

export const updateUser = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User = {
  Question: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).Question(),
  Answer: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).Answer(),
  AnswerComment: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).AnswerComment(),
  UserLikesAnswer: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).UserLikesAnswer(),
  UserLikesQuestion: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).UserLikesQuestion(),
  UserHasBadges: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).UserHasBadges(),
  UserIsInGroup: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).UserIsInGroup(),
  UserLikesComment: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).UserLikesComment(),
}
