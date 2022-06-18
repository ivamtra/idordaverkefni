import { useState, useEffect } from 'react'
// TODO: Hafa þetta relative
import {
  formatDateTime,
  handleUpvoteCount,
} from '/Users/ivanmar/Desktop/Sumar2022/redwood/web/src/utils/utils'

const Question = ({ question, likes }) => {
  const [upvoteCount, setUpvoteCount] = useState(0)
  useEffect(() => {
    console.log('update')
    setUpvoteCount(handleUpvoteCount(likes))
  })
  return (
    <div>
      <div>
        {/*TODO: vantar virkni á takka */}
        <button>upvote</button>
        <button>downvote</button>
        <p>Number of upvotes: {upvoteCount}</p>
        <p>Dagsetning: {formatDateTime(question.createdAt)}</p>
        <p>userId: {question.userId} (breytist seinna)</p>
      </div>
      <h1>{question.title}</h1>
      <h3>Setningar:</h3>
      <div>
        {question.sentences.map((sentence) => {
          return <h3 key={sentence.id}>{sentence.sentence}</h3>
        })}
      </div>
      <div>
        <h3>Tungumál: {question.language}</h3>
        <h3>Aðrar upplýsingar: {question.other_info}</h3>
      </div>
    </div>
  )
}

export default Question
