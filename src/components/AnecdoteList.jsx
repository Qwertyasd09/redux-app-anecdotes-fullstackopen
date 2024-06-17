import { useSelector, useDispatch } from "react-redux"
import { newVote } from "../reducers/anecdoteReducer"
import { addedVote } from "../reducers/notificationReducer"
import PropTypes from 'prop-types'

const AnecdoteItem = ({ anecdote }) => {
  const dispatch = useDispatch()
  const handleVote = () => {
    dispatch(newVote(anecdote.id))
    dispatch(addedVote(anecdote.content))
    setTimeout(() => {
      dispatch(addedVote(null))
    }, 5000)
  }
  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleVote}>vote</button>
      </div>
    </div>
  )
}

export const AnecdoteList = () => {
  const anecdotes = [...useSelector(state => state.anecdotes)].sort(({ votes: a }, { votes: b }) => b-a)
  const currentFilter = useSelector(state => state.filter).toLowerCase()
  const filteredAnecdotes = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(currentFilter))
  return (
    <>
      {
        filteredAnecdotes
          .map(anecdote => <AnecdoteItem key={anecdote.id} anecdote={anecdote} />)
      }
    </>
  )
}

AnecdoteItem.propTypes = {
  anecdote: PropTypes.object.isRequired
}