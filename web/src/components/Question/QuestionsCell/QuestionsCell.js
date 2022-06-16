import { Link, routes } from '@redwoodjs/router'

import Questions from 'src/components/Question/Questions'

export const QUERY = gql`
  query FindQuestions {
    questions {
      id
      title
      language
      definition
      other_info
      userId
      createdAt
      categoryId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No questions yet. '}
      <Link to={routes.newQuestion()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ questions }) => {
  return <Questions questions={questions} />
}
