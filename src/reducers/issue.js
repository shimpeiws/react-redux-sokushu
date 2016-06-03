import { combineReducers } from 'redux'
import { List } from 'immutable'

function ticketList(state = new List(), action) {
  return state
}

function ticketDetail(state = {}, action) {
  return state
}

export default combineReducers({
  ticketList,
  ticketDetail,
})
