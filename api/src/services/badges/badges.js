import { db } from 'src/lib/db'

export const badges = () => {
  return db.badge.findMany()
}

export const badge = ({ id }) => {
  return db.badge.findUnique({
    where: { id },
  })
}

export const createBadge = ({ input }) => {
  return db.badge.create({
    data: input,
  })
}

export const updateBadge = ({ id, input }) => {
  return db.badge.update({
    data: input,
    where: { id },
  })
}

export const deleteBadge = ({ id }) => {
  return db.badge.delete({
    where: { id },
  })
}

export const Badge = {
  UserHasBadges: (_obj, { root }) =>
    db.badge.findUnique({ where: { id: root.id } }).UserHasBadges(),
}
