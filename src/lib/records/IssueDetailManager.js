import { Record } from 'immutable'

const _IssueDetailManager = Record({
  isTitleEditing: false,
  loading: false,
})

export default class IssueDetailManager extends _IssueDetailManager {
}