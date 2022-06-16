import { db } from 'src/lib/db'

export const userHasBadges = () => {
  return db.userHasBadge.findMany()
}

export const userHasBadge = ({ id }) => {
  return db.userHasBadge.findUnique({
    where: { id },
  })
}

export const createUserHasBadge = ({ input }) => {
  return db.userHasBadge.create({
    data: input,
  })
}

export const updateUserHasBadge = ({ id, input }) => {
  return db.userHasBadge.update({
    data: input,
    where: { id },
  })
}

export const deleteUserHasBadge = ({ id }) => {
  return db.userHasBadge.delete({
    where: { id },
  })
}

export const UserHasBadge = {
  user: (_obj, { root }) =>
    db.userHasBadge.findUnique({ where: { id: root.id } }).user(),
  badge: (_obj, { root }) =>
    db.userHasBadge.findUnique({ where: { id: root.id } }).badge(),
}
