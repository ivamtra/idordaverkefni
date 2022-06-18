// Kemur vitlaus Question component
import Question from 'src/components/Question'
export const QUERY = gql`
  query FindQuestionQuery($id: Int!) {
    question: question(id: $id) {
      id
      title
      language
      definition
      other_info
      userId
      createdAt
      sentences {
        id
        sentence
        questionId
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ question }) => {
  return <Question question={question} />
  //return <div>{JSON.stringify(question)}</div>
}
