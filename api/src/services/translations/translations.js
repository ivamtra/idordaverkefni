import { db } from 'src/lib/db'

export const translations = () => {
  return db.translation.findMany()
}

export const translation = ({ id }) => {
  return db.translation.findUnique({
    where: { id },
  })
}

export const createTranslation = ({ input }) => {
  return db.translation.create({
    data: input,
  })
}

export const updateTranslation = ({ id, input }) => {
  return db.translation.update({
    data: input,
    where: { id },
  })
}

export const deleteTranslation = ({ id }) => {
  return db.translation.delete({
    where: { id },
  })
}

export const Translation = {
  answer: (_obj, { root }) =>
    db.translation.findUnique({ where: { id: root.id } }).answer(),
}
