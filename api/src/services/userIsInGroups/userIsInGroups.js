import { db } from 'src/lib/db'

export const userIsInGroups = () => {
  return db.userIsInGroup.findMany()
}

export const userIsInGroup = ({ id }) => {
  return db.userIsInGroup.findUnique({
    where: { id },
  })
}

export const createUserIsInGroup = ({ input }) => {
  return db.userIsInGroup.create({
    data: input,
  })
}

export const updateUserIsInGroup = ({ id, input }) => {
  return db.userIsInGroup.update({
    data: input,
    where: { id },
  })
}

export const deleteUserIsInGroup = ({ id }) => {
  return db.userIsInGroup.delete({
    where: { id },
  })
}

export const UserIsInGroup = {
  user: (_obj, { root }) =>
    db.userIsInGroup.findUnique({ where: { id: root.id } }).user(),
  group: (_obj, { root }) =>
    db.userIsInGroup.findUnique({ where: { id: root.id } }).group(),
}
