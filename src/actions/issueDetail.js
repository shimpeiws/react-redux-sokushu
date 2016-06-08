import $ from 'jquery'
import { Record, List } from 'immutable'

import END_POINTS from '../lib/constants/EndPoints'
import Issue from '../lib/records/Issue'
import Comment from '../lib/records/Comment'

const Actions = {
  SET_ISSUE_DETAIL: 'issue_detail/set_issue_detail',
  SET_COMMENTS: 'issue_detail/set_comments',
  SET_TITLE_EDITING: 'issue_detail/set_title_editing',
  SET_LOADING: 'issue_detail/set_loading',
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

function setTitleEditing(editing) {
  return {
    type: Actions.SET_TITLE_EDITING,
    editing,
  }
}

function setLoading(loading) {
  return {
    type: Actions.SET_LOADING,
    loading,
  }
}

export function findIssueDetail(issueId) {
  return async(dispatch) => {
    dispatch(setLoading(true))
    try {
      const issueDetail = await findIssueDetailRequest(issueId)
      dispatch(setIssueDetail(issueDetail))
    } catch(error) {
      console.log("error", error)
    }
    dispatch(setLoading(false))
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

export function changeTitleEditing(editing) {
  return async(dispatch) => {
    dispatch(setTitleEditing(editing))
  }
}
