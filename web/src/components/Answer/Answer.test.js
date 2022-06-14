import { render } from '@redwoodjs/testing/web'

import Answer from './Answer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Answer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Answer />)
    }).not.toThrow()
  })
})
