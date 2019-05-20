import { combineReducers } from 'redux'
import SIDEBAR_TOGGLE from '../actions'

// init state

const initState = true

function sidebar(state = initState, action) {
  switch (action.type) {
    case SIDEBAR_TOGGLE:
      return value in action ? value : !state
  
    default:
      return !state
  }
}

export default combineReducers({
  sidebar
})
