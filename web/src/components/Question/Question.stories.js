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
  definition: 'A wearable is an object that...',
  other_info: 'Apple watch is a wearable',
  language: 'enska',
}

const LIKES = [
  {
    userId: 1,
    questionId: 1,
    action: 'Like',
    dateTime: '',
  },
  {
    userId: 2,
    questionId: 1,
    action: 'Like',
    dateTime: '',
  },
  {
    userId: 3,
    questionId: 1,
    action: 'Like',
    dateTime: '',
  },
  {
    userId: 4,
    questionId: 1,
    action: 'Dislike',
    dateTime: '',
  },
]

export const generated = () => {
  return <Question question={QUESTION} likes={LIKES} />
}

export default { title: 'Components/Question' }
