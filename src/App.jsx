import { AnecdoteForm } from "./components/AnecdoteForm"
import { AnecdoteList } from "./components/AnecdoteList.jsX"
import { Filter } from "./components/Filter"
import { Notification } from "./components/Notification"

const App = () => {
  
  return (
    <>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </>
  )
}

export default App