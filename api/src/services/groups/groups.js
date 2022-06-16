import { db } from 'src/lib/db'

export const groups = () => {
  return db.group.findMany()
}

export const group = ({ id }) => {
  return db.group.findUnique({
    where: { id },
  })
}

export const createGroup = ({ input }) => {
  return db.group.create({
    data: input,
  })
}

export const updateGroup = ({ id, input }) => {
  return db.group.update({
    data: input,
    where: { id },
  })
}

export const deleteGroup = ({ id }) => {
  return db.group.delete({
    where: { id },
  })
}

export const Group = {
  UserIsInGroup: (_obj, { root }) =>
    db.group.findUnique({ where: { id: root.id } }).UserIsInGroup(),
}
