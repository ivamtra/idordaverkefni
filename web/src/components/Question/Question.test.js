import { render } from '@redwoodjs/testing/web'

import Question from './Question'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Question', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Question />)
    }).not.toThrow()
  })
})
