export const QUERY = gql`
  query FindSentenceQuery($id: Int!) {
    sentence: sentence(id: $id) {
      id
      sentence
      questionId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ sentence }) => {
  return (
    <div>
      <h2>id: {sentence.id}</h2>
      <h2>sentence: {sentence.sentence}</h2>
      <h2>questionId: {sentence.questionId}</h2>
    </div>
  )
}
