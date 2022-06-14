const Answer = ({ answer, likes }) => {
  return (
    <div>
      <div>
        {/*TODO: vantar virkni á takka */}
        <button>upvote</button>
        <button>downvote</button>
        <p>Number of upvotes: {}</p>
        <p>Dagsetning: {}</p>
      </div>
      <h1>Titill?{}</h1>
      <h3>Þýðingar:</h3>
      <h3>Rökstuðningur:</h3>
    </div>
  )
}

export default Answer
