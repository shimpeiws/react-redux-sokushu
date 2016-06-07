import $ from 'jquery'
import { Record, List } from 'immutable'

import END_POINTS from '../lib/constants/EndPoints'
import Issue from '../lib/records/Issue'

const Actions = {
  SET_ISSUE_DETAIL: 'issue_detail/set_issue_detail',
}

export default Actions

function initIssueDetail(issueDetail) {
  return Issue.fromJS(issueDetail)
}

async function findIssueDetailRequest(issueId) {
  console.log("issueId")
  const response = await $.ajax({
    url: `${END_POINTS.ISSUES}/${issueId}`,
    dataType: 'json',
    timeout: 100000,
  })
  return initIssueDetail(response)
}

function setIssueDetail(issueDetail) {
  console.log("issueDetail", issueDetail)
  return {
    type: Actions.SET_ISSUE_DETAIL,
    issueDetail,
  }
}

export function findIssueDetail(issueId) {
  return async(dispatch) => {
    try {
      const issueDetail = await findIssueDetailRequest(issueId)
      dispatch(setIssueDetail(issueDetail))
    } catch(error) {
      console.log("error", error)
    }
  }
}
