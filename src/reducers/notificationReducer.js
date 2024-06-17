import { createSlice } from "@reduxjs/toolkit";

const initialState = null

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addedVote(state, action) {
      const votedBlog = action.payload
      if (!votedBlog) return null
      const message = `You voted ${votedBlog}`
      return message
    },
    addedAnecdote(state, action) {
      const newBlog = action.payload
      if (!newBlog) return null
      const message = `Added new anecdote '${newBlog.substring(0, Math.trunc(newBlog.length * 0.7))}...'`
      return message
    }
  }
})

export const { addedVote, addedAnecdote } = notificationSlice.actions
export default notificationSlice.reducer