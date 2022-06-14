import { useState, useEffect } from 'react'
import { Form, TextField } from '@redwoodjs/forms'

// TODO: Setja í almennan klasa
const formatDateTime = (dateTime) => {
  return (
    // Dagur
    dateTime.substring(8, 10) +
    '.' +
    // Mánuður
    dateTime.substring(5, 7) +
    '.' +
    // Ár
    dateTime.substring(0, 4)
  )
}

const Question = ({ question, likes }) => {
  // TODO: setja í almennan klasa
  const handleUpvoteCount = (likes) => {
    let count = 0

    likes.forEach((like) => {
      like.action === 'Like' ? count++ : count--
    })
    return count
  }
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
