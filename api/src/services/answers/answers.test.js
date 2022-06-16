import {
  answers,
  answer,
  createAnswer,
  updateAnswer,
  deleteAnswer,
} from './answers'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('answers', () => {
  scenario('returns all answers', async (scenario) => {
    const result = await answers()

    expect(result.length).toEqual(Object.keys(scenario.answer).length)
  })

  scenario('returns a single answer', async (scenario) => {
    const result = await answer({ id: scenario.answer.one.id })

    expect(result).toEqual(scenario.answer.one)
  })

  scenario('creates a answer', async (scenario) => {
    const result = await createAnswer({
      input: {
        title: 'String',
        justification: 'String',
        userId: scenario.answer.two.userId,
        questionId: scenario.answer.two.questionId,
      },
    })

    expect(result.title).toEqual('String')
    expect(result.justification).toEqual('String')
    expect(result.userId).toEqual(scenario.answer.two.userId)
    expect(result.questionId).toEqual(scenario.answer.two.questionId)
  })

  scenario('updates a answer', async (scenario) => {
    const original = await answer({ id: scenario.answer.one.id })
    const result = await updateAnswer({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a answer', async (scenario) => {
    const original = await deleteAnswer({ id: scenario.answer.one.id })
    const result = await answer({ id: original.id })

    expect(result).toEqual(null)
  })
})
