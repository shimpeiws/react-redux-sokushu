import $ from 'jquery'
import { Record, List } from 'immutable'

import END_POINTS from '../lib/constants/EndPoints'
import Issue from '../lib/records/Issue'

const Actions = {
  SET_ISSUES: 'issue/set_issues',
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
  console.log("response", response)
  return initIssues(response)
}

function setIssues(issues) {
  return {
    type: Actions.SET_ISSUES,
    issues,
  }
}

export function findIssues() {
  return async(dispatch) => {
    console.log("findIssues!!!!")
    try {
      const issues = await findIssuesRequest()
      dispatch(setIssues(issues))
      console.log("issues", issues)
    } catch (error) {
      console.log("error", error)
    }
  }
}
