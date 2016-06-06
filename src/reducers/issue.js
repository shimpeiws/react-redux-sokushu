import { combineReducers } from 'redux'
import { List } from 'immutable'

import IssueActions from '../actions/issue'

function issueList(state = new List(), action) {
  switch (action.type) {
    case IssueActions.SET_ISSUES:
      return action.issues
    default:
      break // do nothing
  }
  return state
}

function issueDetail(state = {}, action) {
  return state
}

export default combineReducers({
  issueList,
  issueDetail,
})
