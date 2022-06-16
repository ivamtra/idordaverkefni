import {
  sentences,
  sentence,
  createSentence,
  updateSentence,
  deleteSentence,
} from './sentences'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('sentences', () => {
  scenario('returns all sentences', async (scenario) => {
    const result = await sentences()

    expect(result.length).toEqual(Object.keys(scenario.sentence).length)
  })

  scenario('returns a single sentence', async (scenario) => {
    const result = await sentence({ id: scenario.sentence.one.id })

    expect(result).toEqual(scenario.sentence.one)
  })

  scenario('creates a sentence', async (scenario) => {
    const result = await createSentence({
      input: {
        sentence: 'String',
        questionId: scenario.sentence.two.questionId,
      },
    })

    expect(result.sentence).toEqual('String')
    expect(result.questionId).toEqual(scenario.sentence.two.questionId)
  })

  scenario('updates a sentence', async (scenario) => {
    const original = await sentence({ id: scenario.sentence.one.id })
    const result = await updateSentence({
      id: original.id,
      input: { sentence: 'String2' },
    })

    expect(result.sentence).toEqual('String2')
  })

  scenario('deletes a sentence', async (scenario) => {
    const original = await deleteSentence({ id: scenario.sentence.one.id })
    const result = await sentence({ id: original.id })

    expect(result).toEqual(null)
  })
})
