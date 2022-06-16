import {
  userLikesAnswers,
  userLikesAnswer,
  createUserLikesAnswer,
  updateUserLikesAnswer,
  deleteUserLikesAnswer,
} from './userLikesAnswers'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userLikesAnswers', () => {
  scenario('returns all userLikesAnswers', async (scenario) => {
    const result = await userLikesAnswers()

    expect(result.length).toEqual(Object.keys(scenario.userLikesAnswer).length)
  })

  scenario('returns a single userLikesAnswer', async (scenario) => {
    const result = await userLikesAnswer({
      id: scenario.userLikesAnswer.one.id,
    })

    expect(result).toEqual(scenario.userLikesAnswer.one)
  })

  scenario('creates a userLikesAnswer', async (scenario) => {
    const result = await createUserLikesAnswer({
      input: {
        userId: scenario.userLikesAnswer.two.userId,
        action: 4682851,
        answerId: scenario.userLikesAnswer.two.answerId,
      },
    })

    expect(result.userId).toEqual(scenario.userLikesAnswer.two.userId)
    expect(result.action).toEqual(4682851)
    expect(result.answerId).toEqual(scenario.userLikesAnswer.two.answerId)
  })

  scenario('updates a userLikesAnswer', async (scenario) => {
    const original = await userLikesAnswer({
      id: scenario.userLikesAnswer.one.id,
    })

    const result = await updateUserLikesAnswer({
      id: original.id,
      input: { action: 9639553 },
    })

    expect(result.action).toEqual(9639553)
  })

  scenario('deletes a userLikesAnswer', async (scenario) => {
    const original = await deleteUserLikesAnswer({
      id: scenario.userLikesAnswer.one.id,
    })

    const result = await userLikesAnswer({ id: original.id })

    expect(result).toEqual(null)
  })
})
