import Question from './Question'

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
    action: 'Like',
    dateTime: '2020-01-01T12:34:56Z',
  },
  {
    userId: 2,
    questionId: 1,
    action: 'Like',
    dateTime: '2020-01-01T12:34:56Z',
  },
  {
    userId: 3,
    questionId: 1,
    action: 'Like',
    dateTime: '2020-01-01T12:34:56Z',
  },
  {
    userId: 4,
    questionId: 1,
    action: 'Dislike',
    dateTime: '2020-01-01T12:34:56Z',
  },
]

export const generated = () => {
  return <Question question={QUESTION} likes={LIKES} />
}

export default { title: 'Components/Question' }
