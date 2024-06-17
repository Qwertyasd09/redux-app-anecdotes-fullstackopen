import { useDispatch } from "react-redux"
import { getFilter } from "../reducers/filterReducer"

export const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = (event) => {
    const currentFilter = event.target.value
    dispatch(getFilter(currentFilter))
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}
