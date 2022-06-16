export const formatDateTime = (dateTime) => {
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

export const handleUpvoteCount = (likes) => {
  let count = 0

  // Líklegt til að breytast því like getur verið boolean
  likes.forEach((like) => {
    count += like.action
  })
  return count
}
