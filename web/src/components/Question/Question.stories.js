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

export const generated = () => {
  return <Question question={QUESTION} />
}

export default { title: 'Components/Question' }
