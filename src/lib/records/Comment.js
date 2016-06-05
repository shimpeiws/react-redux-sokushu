import { List, Record } from 'immutable'

const _Comment = Record({
  id: null,
  user_name: '',
  content: '',
  created: '',
  updated: '',
})

export default class Comment extends _Comment {
  static fromJS(comment = {}) {
    return (new this).merge({
      id: comment.id,
      user_name: comment.name,
      content: comment.content,
      created: comment.created,
      updated: comment.updated,
    })
  }
}
