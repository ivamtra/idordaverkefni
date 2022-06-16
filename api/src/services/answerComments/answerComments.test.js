import {
  answerComments,
  answerComment,
  createAnswerComment,
  updateAnswerComment,
  deleteAnswerComment,
} from './answerComments'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('answerComments', () => {
  scenario('returns all answerComments', async (scenario) => {
    const result = await answerComments()

    expect(result.length).toEqual(Object.keys(scenario.answerComment).length)
  })

  scenario('returns a single answerComment', async (scenario) => {
    const result = await answerComment({ id: scenario.answerComment.one.id })

    expect(result).toEqual(scenario.answerComment.one)
  })

  scenario('creates a answerComment', async (scenario) => {
    const result = await createAnswerComment({
      input: {
        body: 'String',
        userId: scenario.answerComment.two.userId,
        answerId: scenario.answerComment.two.answerId,
      },
    })

    expect(result.body).toEqual('String')
    expect(result.userId).toEqual(scenario.answerComment.two.userId)
    expect(result.answerId).toEqual(scenario.answerComment.two.answerId)
  })

  scenario('updates a answerComment', async (scenario) => {
    const original = await answerComment({ id: scenario.answerComment.one.id })
    const result = await updateAnswerComment({
      id: original.id,
      input: { body: 'String2' },
    })

    expect(result.body).toEqual('String2')
  })

  scenario('deletes a answerComment', async (scenario) => {
    const original = await deleteAnswerComment({
      id: scenario.answerComment.one.id,
    })

    const result = await answerComment({ id: original.id })

    expect(result).toEqual(null)
  })
})
