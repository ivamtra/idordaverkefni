import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_QUESTION_MUTATION = gql`
  mutation DeleteQuestionMutation($id: Int!) {
    deleteQuestion(id: $id) {
      id
    }
  }
`

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Question = ({ question }) => {
  const [deleteQuestion] = useMutation(DELETE_QUESTION_MUTATION, {
    onCompleted: () => {
      toast.success('Question deleted')
      navigate(routes.questions())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete question ' + id + '?')) {
      deleteQuestion({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Question {question.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{question.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{question.title}</td>
            </tr>
            <tr>
              <th>Language</th>
              <td>{question.language}</td>
            </tr>
            <tr>
              <th>Definition</th>
              <td>{question.definition}</td>
            </tr>
            <tr>
              <th>Other info</th>
              <td>{question.other_info}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{question.userId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(question.createdAt)}</td>
            </tr>
            <tr>
              <th>Category id</th>
              <td>{question.categoryId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editQuestion({ id: question.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(question.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Question
