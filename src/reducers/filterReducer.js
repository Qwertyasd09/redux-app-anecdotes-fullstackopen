const reducer = (state = '', action) => {
  switch (action.type) {
    case 'FILTER': {
      return action.payload
    }
    default:
      return state
  }
}

export const getFilter = (currentInput) => {
  return {
    type: 'FILTER',
    payload: currentInput
  }
}

export default reducer