import { combineReducers } from 'redux'
import { List } from 'immutable'

import Issue from '../lib/records/Issue'
import IssueDetailManager from '../lib/records/IssueDetailManager'

import IssueActions from '../actions/issue'
import IssueDetailActions from '../actions/issueDetail'

function issueList(state = new List(), action) {
  switch (action.type) {
    case IssueActions.SET_ISSUES:
      return action.issues
    default:
      break // do nothing
  }
  return state
}

function issueDetail(state = new Issue(), action) {
  switch (action.type) {
    case IssueDetailActions.SET_ISSUE_DETAIL:
      return action.issueDetail
    case IssueDetailActions.SET_COMMENTS:
      return state.set('comments', action.comments)
    default:
      break // do nothing
  }
  return state
}

function issueDetailManager(state = new IssueDetailManager(), action) {
  switch (action.type) {
    case IssueDetailActions.SET_TITLE_EDITING:
      return state.set('isTitleEditing', action.editing)
    default:
      break // do nothing
  }
  return state
}

export default combineReducers({
  issueList,
  issueDetail,
  issueDetailManager,
})
