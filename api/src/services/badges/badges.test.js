import { badges, badge, createBadge, updateBadge, deleteBadge } from './badges'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('badges', () => {
  scenario('returns all badges', async (scenario) => {
    const result = await badges()

    expect(result.length).toEqual(Object.keys(scenario.badge).length)
  })

  scenario('returns a single badge', async (scenario) => {
    const result = await badge({ id: scenario.badge.one.id })

    expect(result).toEqual(scenario.badge.one)
  })

  scenario('creates a badge', async () => {
    const result = await createBadge({
      input: { imageUrl: 'String', title: 'String', description: 'String' },
    })

    expect(result.imageUrl).toEqual('String')
    expect(result.title).toEqual('String')
    expect(result.description).toEqual('String')
  })

  scenario('updates a badge', async (scenario) => {
    const original = await badge({ id: scenario.badge.one.id })
    const result = await updateBadge({
      id: original.id,
      input: { imageUrl: 'String2' },
    })

    expect(result.imageUrl).toEqual('String2')
  })

  scenario('deletes a badge', async (scenario) => {
    const original = await deleteBadge({ id: scenario.badge.one.id })
    const result = await badge({ id: original.id })

    expect(result).toEqual(null)
  })
})
