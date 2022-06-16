import {
  userLikesComments,
  userLikesComment,
  createUserLikesComment,
  updateUserLikesComment,
  deleteUserLikesComment,
} from './userLikesComments'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userLikesComments', () => {
  scenario('returns all userLikesComments', async (scenario) => {
    const result = await userLikesComments()

    expect(result.length).toEqual(Object.keys(scenario.userLikesComment).length)
  })

  scenario('returns a single userLikesComment', async (scenario) => {
    const result = await userLikesComment({
      id: scenario.userLikesComment.one.id,
    })

    expect(result).toEqual(scenario.userLikesComment.one)
  })

  scenario('creates a userLikesComment', async (scenario) => {
    const result = await createUserLikesComment({
      input: {
        action: 5764276,
        userId: scenario.userLikesComment.two.userId,
        questionId: scenario.userLikesComment.two.questionId,
      },
    })

    expect(result.action).toEqual(5764276)
    expect(result.userId).toEqual(scenario.userLikesComment.two.userId)
    expect(result.questionId).toEqual(scenario.userLikesComment.two.questionId)
  })

  scenario('updates a userLikesComment', async (scenario) => {
    const original = await userLikesComment({
      id: scenario.userLikesComment.one.id,
    })

    const result = await updateUserLikesComment({
      id: original.id,
      input: { action: 2080198 },
    })

    expect(result.action).toEqual(2080198)
  })

  scenario('deletes a userLikesComment', async (scenario) => {
    const original = await deleteUserLikesComment({
      id: scenario.userLikesComment.one.id,
    })

    const result = await userLikesComment({ id: original.id })

    expect(result).toEqual(null)
  })
})
