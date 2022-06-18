import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Question from 'src/components/Question'
import QuestionCell from 'src/components/Question/QuestionCell'

// TODO: Laga QuestionCell

const QUESTION = {
  id: 1,
  title: 'Wearable',
  sentences: [
    {
      id: 1,
      sentence: 'John has a wearable',
      questionId: 1,
    },
    {
      id: 2,
      sentence: 'Maggie has a wearable',
      questionId: 1,
    },
  ],
  language: 'enska',
  definition: 'A wearable is an object that...',
  other_info: 'Apple watch is a wearable',
  userId: 1,
  createdAt: '2020-01-01T12:34:56Z',
}

const LIKES = [
  {
    userId: 1,
    questionId: 1,
    action: 1,
    dateTime: '2020-01-01T12:34:56Z',
  },
  {
    userId: 2,
    questionId: 1,
    action: 1,
    dateTime: '2020-01-01T12:34:56Z',
  },
  {
    userId: 3,
    questionId: 1,
    action: 1,
    dateTime: '2020-01-01T12:34:56Z',
  },
  {
    userId: 4,
    questionId: 1,
    action: -1,
    dateTime: '2020-01-01T12:34:56Z',
  },
]

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <h2>
        <Link to={routes.signup()}>Signup</Link>
      </h2>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
      <Question question={QUESTION} likes={LIKES} />
      <h1>Bil</h1>
      <QuestionCell id={1} />
    </>
  )
}

export default HomePage
