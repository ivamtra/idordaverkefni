import {
  userHasBadgeses,
  userHasBadges,
  createUserHasBadges,
  updateUserHasBadges,
  deleteUserHasBadges,
} from './userHasBadgeses'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userHasBadgeses', () => {
  scenario('returns all userHasBadgeses', async (scenario) => {
    const result = await userHasBadgeses()

    expect(result.length).toEqual(Object.keys(scenario.userHasBadges).length)
  })

  scenario('returns a single userHasBadges', async (scenario) => {
    const result = await userHasBadges({ id: scenario.userHasBadges.one.id })

    expect(result).toEqual(scenario.userHasBadges.one)
  })

  scenario('creates a userHasBadges', async (scenario) => {
    const result = await createUserHasBadges({
      input: {
        userId: scenario.userHasBadges.two.userId,
        badgeId: scenario.userHasBadges.two.badgeId,
      },
    })

    expect(result.userId).toEqual(scenario.userHasBadges.two.userId)
    expect(result.badgeId).toEqual(scenario.userHasBadges.two.badgeId)
  })

  scenario('updates a userHasBadges', async (scenario) => {
    const original = await userHasBadges({ id: scenario.userHasBadges.one.id })
    const result = await updateUserHasBadges({
      id: original.id,
      input: { userId: scenario.userHasBadges.two.userId },
    })

    expect(result.userId).toEqual(scenario.userHasBadges.two.userId)
  })

  scenario('deletes a userHasBadges', async (scenario) => {
    const original = await deleteUserHasBadges({
      id: scenario.userHasBadges.one.id,
    })

    const result = await userHasBadges({ id: original.id })

    expect(result).toEqual(null)
  })
})
