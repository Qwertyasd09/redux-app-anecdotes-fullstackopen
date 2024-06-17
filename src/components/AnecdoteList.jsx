import { useSelector, useDispatch } from "react-redux"
import { newVote } from "../reducers/anecdoteReducer"
import PropTypes from 'prop-types'

const AnecdoteItem = ({ anecdote }) => {
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => dispatch(newVote(anecdote.id))}>vote</button>
      </div>
    </div>
  )
}

export const AnecdoteList = () => {
  const anecdotes = useSelector(state => state).sort(({ votes: a }, { votes: b }) => b-a)
  return (
    <>
      {anecdotes.map(anecdote => <AnecdoteItem key={anecdote.id} anecdote={anecdote} />)}
    </>
  )
}

AnecdoteItem.propTypes = {
  anecdote: PropTypes.object.isRequired
}