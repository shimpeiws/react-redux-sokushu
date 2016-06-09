import $ from 'jquery'
import { Record, List } from 'immutable'

import END_POINTS from '../lib/constants/EndPoints'
import Issue from '../lib/records/Issue'

const Actions = {
  SET_ISSUE_TITLE: 'issue_new/set_issue_title',
  SET_LOADING: 'issue_new/set_loading',
}

export default Actions

export function setIssueTitle(title) {
  return {
    type: Actions.SET_ISSUE_TITLE,
    title: title
  }
}

export function createIssue() {
  return async(dispatch) => {
    console.log('create Issue!')
    dispatch(setLoading(true))
  }
}

function setLoading(loading) {
  return {
    type: Actions.SET_LOADING,
    loading,
  }
}
