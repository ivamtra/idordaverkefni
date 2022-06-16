import {
  questionIsInCategories,
  questionIsInCategory,
  createQuestionIsInCategory,
  updateQuestionIsInCategory,
  deleteQuestionIsInCategory,
} from './questionIsInCategories'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('questionIsInCategories', () => {
  scenario('returns all questionIsInCategories', async (scenario) => {
    const result = await questionIsInCategories()

    expect(result.length).toEqual(
      Object.keys(scenario.questionIsInCategory).length
    )
  })

  scenario('returns a single questionIsInCategory', async (scenario) => {
    const result = await questionIsInCategory({
      id: scenario.questionIsInCategory.one.id,
    })

    expect(result).toEqual(scenario.questionIsInCategory.one)
  })

  scenario('creates a questionIsInCategory', async (scenario) => {
    const result = await createQuestionIsInCategory({
      input: {
        questionId: scenario.questionIsInCategory.two.questionId,
        categoryId: scenario.questionIsInCategory.two.categoryId,
      },
    })

    expect(result.questionId).toEqual(
      scenario.questionIsInCategory.two.questionId
    )

    expect(result.categoryId).toEqual(
      scenario.questionIsInCategory.two.categoryId
    )
  })

  scenario('updates a questionIsInCategory', async (scenario) => {
    const original = await questionIsInCategory({
      id: scenario.questionIsInCategory.one.id,
    })

    const result = await updateQuestionIsInCategory({
      id: original.id,
      input: { questionId: scenario.questionIsInCategory.two.questionId },
    })

    expect(result.questionId).toEqual(
      scenario.questionIsInCategory.two.questionId
    )
  })

  scenario('deletes a questionIsInCategory', async (scenario) => {
    const original = await deleteQuestionIsInCategory({
      id: scenario.questionIsInCategory.one.id,
    })

    const result = await questionIsInCategory({ id: original.id })

    expect(result).toEqual(null)
  })
})
