import { db } from 'src/lib/db'

export const issues = () => {
  return db.issue.findMany()
}

export const issue = ({ id }) => {
  return db.issue.findUnique({
    where: { id },
  })
}

export const createIssue = ({ input }) => {
  return db.issue.create({
    data: input,
  })
}

export const updateIssue = ({ id, input }) => {
  return db.issue.update({
    data: input,
    where: { id },
  })
}

export const deleteIssue = ({ id }) => {
  return db.issue.delete({
    where: { id },
  })
}

export const Issue = {
  question: (_obj, { root }) =>
    db.issue.findUnique({ where: { id: root.id } }).question(),
  answer: (_obj, { root }) =>
    db.issue.findUnique({ where: { id: root.id } }).answer(),
  answerComment: (_obj, { root }) =>
    db.issue.findUnique({ where: { id: root.id } }).answerComment(),
}
