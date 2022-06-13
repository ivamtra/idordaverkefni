import { useState, useEffect } from 'react'
import { Form, TextField } from '@redwoodjs/forms'

const Question = ({ question, likes }) => {
  const handleUpvoteCount = (likes) => {
    let count = 0
    for (let i = 0; i < likes.length; i++) {
      if (likes[i].action === 'Like') {
        count++
      } else {
        count--
      }
    }
    return count
  }
  const [upvoteCount, setUpvoteCount] = useState(0)
  useEffect(() => {
    setUpvoteCount(handleUpvoteCount(likes))
  })
  return (
    <div>
      <div>
        <button>upvote</button>
        <button>downvote</button>
        <p>Number of upvotes: {upvoteCount}</p> {}
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
