import $ from 'jquery'
import { Record, List } from 'immutable'

import END_POINTS from '../lib/constants/EndPoints'
import Issue from '../lib/records/Issue'

const Actions = {
  SET_ISSUES: 'issue/set_issues',
  SET_LOADING: 'issue/set_loading',
}

export default Actions

function initIssues(issues) {
  return new List(issues.map((issue) => {
    return Issue.fromJS(issue)
  }))
}

async function findIssuesRequest(params={}) {
  const response = await $.ajax({
    url: END_POINTS.ISSUES,
    dataType: 'json',
    data: params,
    timeout: 100000,
  })
  return initIssues(response)
}

function setIssues(issues) {
  return {
    type: Actions.SET_ISSUES,
    issues,
  }
}

function setLoading(loading) {
  return {
    type: Actions.SET_LOADING,
    loading,
  }
}

export function findIssues() {
  return async(dispatch) => {
    dispatch(setLoading(true))
    try {
      const issues = await findIssuesRequest()
      dispatch(setIssues(issues))
    } catch (error) {
      console.log("error", error)
    }
    dispatch(setLoading(false))
  }
}
