import { issues, issue, createIssue, updateIssue, deleteIssue } from './issues'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('issues', () => {
  scenario('returns all issues', async (scenario) => {
    const result = await issues()

    expect(result.length).toEqual(Object.keys(scenario.issue).length)
  })

  scenario('returns a single issue', async (scenario) => {
    const result = await issue({ id: scenario.issue.one.id })

    expect(result).toEqual(scenario.issue.one)
  })

  scenario('creates a issue', async () => {
    const result = await createIssue({
      input: { description: 'String' },
    })

    expect(result.description).toEqual('String')
  })

  scenario('updates a issue', async (scenario) => {
    const original = await issue({ id: scenario.issue.one.id })
    const result = await updateIssue({
      id: original.id,
      input: { description: 'String2' },
    })

    expect(result.description).toEqual('String2')
  })

  scenario('deletes a issue', async (scenario) => {
    const original = await deleteIssue({ id: scenario.issue.one.id })
    const result = await issue({ id: original.id })

    expect(result).toEqual(null)
  })
})
