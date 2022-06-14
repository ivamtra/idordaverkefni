import Answer from './Answer'

const ANSWER = {
  id: 1,
  title: 'Titill',
  translations: [
    {
      id: 1,
      translation: 'Gervigreind',
      answerId: 1,
    },
    {
      id: 2,
      sentence: 'Tauganet',
      answerId: 1,
    },
  ],
  definition: 'A wearable is an object that...',
  other_info: 'Apple watch is a wearable',
  language: 'enska',
  createdAt: '2020-01-01T12:34:56Z',
}

export const generated = () => {
  return <Answer />
}

export default { title: 'Components/Answer' }
