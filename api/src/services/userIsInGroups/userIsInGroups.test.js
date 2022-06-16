import {
  userIsInGroups,
  userIsInGroup,
  createUserIsInGroup,
  updateUserIsInGroup,
  deleteUserIsInGroup,
} from './userIsInGroups'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userIsInGroups', () => {
  scenario('returns all userIsInGroups', async (scenario) => {
    const result = await userIsInGroups()

    expect(result.length).toEqual(Object.keys(scenario.userIsInGroup).length)
  })

  scenario('returns a single userIsInGroup', async (scenario) => {
    const result = await userIsInGroup({ id: scenario.userIsInGroup.one.id })

    expect(result).toEqual(scenario.userIsInGroup.one)
  })

  scenario('creates a userIsInGroup', async (scenario) => {
    const result = await createUserIsInGroup({
      input: {
        userId: scenario.userIsInGroup.two.userId,
        groupId: scenario.userIsInGroup.two.groupId,
      },
    })

    expect(result.userId).toEqual(scenario.userIsInGroup.two.userId)
    expect(result.groupId).toEqual(scenario.userIsInGroup.two.groupId)
  })

  scenario('updates a userIsInGroup', async (scenario) => {
    const original = await userIsInGroup({ id: scenario.userIsInGroup.one.id })
    const result = await updateUserIsInGroup({
      id: original.id,
      input: { userId: scenario.userIsInGroup.two.userId },
    })

    expect(result.userId).toEqual(scenario.userIsInGroup.two.userId)
  })

  scenario('deletes a userIsInGroup', async (scenario) => {
    const original = await deleteUserIsInGroup({
      id: scenario.userIsInGroup.one.id,
    })

    const result = await userIsInGroup({ id: original.id })

    expect(result).toEqual(null)
  })
})
