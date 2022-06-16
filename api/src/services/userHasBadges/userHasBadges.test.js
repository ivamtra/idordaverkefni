import {
  userHasBadges,
  userHasBadge,
  createUserHasBadge,
  updateUserHasBadge,
  deleteUserHasBadge,
} from './userHasBadges'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userHasBadges', () => {
  scenario('returns all userHasBadges', async (scenario) => {
    const result = await userHasBadges()

    expect(result.length).toEqual(Object.keys(scenario.userHasBadge).length)
  })

  scenario('returns a single userHasBadge', async (scenario) => {
    const result = await userHasBadge({ id: scenario.userHasBadge.one.id })

    expect(result).toEqual(scenario.userHasBadge.one)
  })

  scenario('creates a userHasBadge', async (scenario) => {
    const result = await createUserHasBadge({
      input: {
        userId: scenario.userHasBadge.two.userId,
        badgeId: scenario.userHasBadge.two.badgeId,
      },
    })

    expect(result.userId).toEqual(scenario.userHasBadge.two.userId)
    expect(result.badgeId).toEqual(scenario.userHasBadge.two.badgeId)
  })

  scenario('updates a userHasBadge', async (scenario) => {
    const original = await userHasBadge({ id: scenario.userHasBadge.one.id })
    const result = await updateUserHasBadge({
      id: original.id,
      input: { userId: scenario.userHasBadge.two.userId },
    })

    expect(result.userId).toEqual(scenario.userHasBadge.two.userId)
  })

  scenario('deletes a userHasBadge', async (scenario) => {
    const original = await deleteUserHasBadge({
      id: scenario.userHasBadge.one.id,
    })

    const result = await userHasBadge({ id: original.id })

    expect(result).toEqual(null)
  })
})
