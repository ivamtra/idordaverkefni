import Question from 'src/components/Question/Question'

export const QUERY = gql`
  query FindQuestionById($id: Int!) {
    question: question(id: $id) {
      id
      title
      language
      definition
      other_info
      userId
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Question not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ question }) => {
  return <Question question={question} />
}
