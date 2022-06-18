import Question from 'src/components/Question/Question'
export const QUERY = gql`
  query FindQuestionQuery($id: Int!) {
    question: question(id: $id) {
      id
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
