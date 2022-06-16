import {
  userLikesQuestions,
  userLikesQuestion,
  createUserLikesQuestion,
  updateUserLikesQuestion,
  deleteUserLikesQuestion,
} from './userLikesQuestions'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userLikesQuestions', () => {
  scenario('returns all userLikesQuestions', async (scenario) => {
    const result = await userLikesQuestions()

    expect(result.length).toEqual(
      Object.keys(scenario.userLikesQuestion).length
    )
  })

  scenario('returns a single userLikesQuestion', async (scenario) => {
    const result = await userLikesQuestion({
      id: scenario.userLikesQuestion.one.id,
    })

    expect(result).toEqual(scenario.userLikesQuestion.one)
  })

  scenario('creates a userLikesQuestion', async (scenario) => {
    const result = await createUserLikesQuestion({
      input: {
        userId: scenario.userLikesQuestion.two.userId,
        action: 6273247,
        questionId: scenario.userLikesQuestion.two.questionId,
      },
    })

    expect(result.userId).toEqual(scenario.userLikesQuestion.two.userId)
    expect(result.action).toEqual(6273247)
    expect(result.questionId).toEqual(scenario.userLikesQuestion.two.questionId)
  })

  scenario('updates a userLikesQuestion', async (scenario) => {
    const original = await userLikesQuestion({
      id: scenario.userLikesQuestion.one.id,
    })

    const result = await updateUserLikesQuestion({
      id: original.id,
      input: { action: 6587671 },
    })

    expect(result.action).toEqual(6587671)
  })

  scenario('deletes a userLikesQuestion', async (scenario) => {
    const original = await deleteUserLikesQuestion({
      id: scenario.userLikesQuestion.one.id,
    })

    const result = await userLikesQuestion({ id: original.id })

    expect(result).toEqual(null)
  })
})
