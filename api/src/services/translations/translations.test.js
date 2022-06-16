import {
  translations,
  translation,
  createTranslation,
  updateTranslation,
  deleteTranslation,
} from './translations'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('translations', () => {
  scenario('returns all translations', async (scenario) => {
    const result = await translations()

    expect(result.length).toEqual(Object.keys(scenario.translation).length)
  })

  scenario('returns a single translation', async (scenario) => {
    const result = await translation({ id: scenario.translation.one.id })

    expect(result).toEqual(scenario.translation.one)
  })

  scenario('creates a translation', async (scenario) => {
    const result = await createTranslation({
      input: {
        translation: 'String',
        answerId: scenario.translation.two.answerId,
      },
    })

    expect(result.translation).toEqual('String')
    expect(result.answerId).toEqual(scenario.translation.two.answerId)
  })

  scenario('updates a translation', async (scenario) => {
    const original = await translation({ id: scenario.translation.one.id })
    const result = await updateTranslation({
      id: original.id,
      input: { translation: 'String2' },
    })

    expect(result.translation).toEqual('String2')
  })

  scenario('deletes a translation', async (scenario) => {
    const original = await deleteTranslation({
      id: scenario.translation.one.id,
    })

    const result = await translation({ id: original.id })

    expect(result).toEqual(null)
  })
})
