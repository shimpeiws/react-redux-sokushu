import { List, Record } from 'immutable'

import Comment from './Comment'
import User from './User'

export const STATE = {
  CLOSE: 'close',
  OPEN: 'open',
}

const _Issue = Record({
  id: null,
  title: '',
  status: STATE.CLOSE,
  comment_count: null,
  created: '',
  updated: '',
  comments: new List(),
  content: '',
  assignee: new User(),
  labels: new List(),
})

export default class Issue extends _Issue {
  static fromJS(issue = {}) {
    let comments = new List()

    if (issue.comments) {
      comments = new List(issue.comments.map((comment) => {
        return Comment.fromJS(comment)
      }))
    }

    return (new this).merge({
      id: parseInt(issue.id),
      title: issue.title,
      status: issue.status,
      comment_count: issue.comment_count,
      created: issue.created,
      updated: issue.updated,
      content: issue.content,
      comments,
      assignee: issue.assignee ? User.fromJS(issue.assignee) : new User(),
    })
  }

  isValidTitle() {
    return this.title.length > 0
  }

  isValidContent() {
    return this.content.length > 0
  }
}
