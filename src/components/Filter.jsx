import { useDispatch } from "react-redux"
import { getFilter } from "../reducers/filterReducer"
import { useSelector } from "react-redux"

export const Filter = () => {
  const dispatch = useDispatch()
  const notification = useSelector(state => state.notification)
  const handleChange = (event) => {
    const currentFilter = event.target.value
    dispatch(getFilter(currentFilter))
  }

  const style = {
    display: !notification ? 'block' : 'none',
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}
