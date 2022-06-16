import { db } from 'src/lib/db'

export const userHasBadgeses = () => {
  return db.userHasBadges.findMany()
}

export const userHasBadges = ({ id }) => {
  return db.userHasBadges.findUnique({
    where: { id },
  })
}

export const createUserHasBadges = ({ input }) => {
  return db.userHasBadges.create({
    data: input,
  })
}

export const updateUserHasBadges = ({ id, input }) => {
  return db.userHasBadges.update({
    data: input,
    where: { id },
  })
}

export const deleteUserHasBadges = ({ id }) => {
  return db.userHasBadges.delete({
    where: { id },
  })
}

export const UserHasBadges = {
  user: (_obj, { root }) =>
    db.userHasBadges.findUnique({ where: { id: root.id } }).user(),
  badge: (_obj, { root }) =>
    db.userHasBadges.findUnique({ where: { id: root.id } }).badge(),
}
