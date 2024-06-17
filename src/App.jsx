import { AnecdoteForm } from "./components/AnecdoteForm"
import { AnecdoteList } from "./components/AnecdoteList.jsX" 

const App = () => {
  return (
    <>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </>
  )
}

export default App