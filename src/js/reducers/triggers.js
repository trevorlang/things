const triggers = (state = [{id: 0, state: 0}], action) => {
  switch (action.type) {
    case 'TOGGLE_LED':
       return state.map(trigger => {
         return (trigger.id === action.id)
           ? {...trigger, state: !trigger.state}
           : trigger
         }
       )
    default:
      return state
  }
}

export default triggers
