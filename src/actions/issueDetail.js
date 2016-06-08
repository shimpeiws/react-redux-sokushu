import $ from 'jquery'
import { Record, List } from 'immutable'

import END_POINTS from '../lib/constants/EndPoints'
import Issue from '../lib/records/Issue'
import Comment from '../lib/records/Comment'

const Actions = {
  SET_ISSUE_DETAIL: 'issue_detail/set_issue_detail',
  SET_COMMENTS: 'issue_detail/set_comments',
}

export default Actions

function initIssueDetail(issueDetail) {
  return Issue.fromJS(issueDetail)
}

async function findIssueDetailRequest(issueId) {
  console.log("issueId")
  const response = await $.ajax({
    url: `${END_POINTS.ISSUES}/${issueId}`,
    method: 'GET',
    dataType: 'json',
    timeout: 100000,
  })
  return initIssueDetail(response)
}

async function postCommentRequest(issue, comment) {
  const data = {
    comment: {
      user_name: comment.userName,
      content: comment.content,
    },
  }

  const response = await $.ajax({
    url: `${END_POINTS.ISSUES}/${issue.id}/comments`,
    method: 'POST',
    data,
    timeout: 100000,
  })

  return Comment.fromJS(response)
}

function setIssueDetail(issueDetail) {
  console.log("issueDetail", issueDetail)
  return {
    type: Actions.SET_ISSUE_DETAIL,
    issueDetail,
  }
}

function setComments(comments) {
  return {
    type: Actions.SET_COMMENTS,
    comments,
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

export function addComment(issueDetail, comment) {
  return async(dispatch) => {
    const prevComments = issueDetail.comments
    const nextComments = prevComments.push(comment)
    dispatch(setComments(nextComments))

    try {
      await postCommentRequest(issueDetail, comment)
    } catch (error) {
      console.log("error", error)
      dispatch(setComments(prevComments)) // fallback to previous state
    }
  }
}
