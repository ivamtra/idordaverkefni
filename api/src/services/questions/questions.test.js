import {
  questions,
  question,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} from './questions'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('questions', () => {
  scenario('returns all questions', async (scenario) => {
    const result = await questions()

    expect(result.length).toEqual(Object.keys(scenario.question).length)
  })

  scenario('returns a single question', async (scenario) => {
    const result = await question({ id: scenario.question.one.id })

    expect(result).toEqual(scenario.question.one)
  })

  scenario('creates a question', async (scenario) => {
    const result = await createQuestion({
      input: {
        title: 'String',
        language: 'String',
        definition: 'String',
        userId: scenario.question.two.userId,
      },
    })

    expect(result.title).toEqual('String')
    expect(result.language).toEqual('String')
    expect(result.definition).toEqual('String')
    expect(result.userId).toEqual(scenario.question.two.userId)
  })

  scenario('updates a question', async (scenario) => {
    const original = await question({ id: scenario.question.one.id })
    const result = await updateQuestion({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a question', async (scenario) => {
    const original = await deleteQuestion({ id: scenario.question.one.id })
    const result = await question({ id: original.id })

    expect(result).toEqual(null)
  })
})
