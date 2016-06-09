import $ from 'jquery'
import { Record, List } from 'immutable'

import END_POINTS from '../lib/constants/EndPoints'
import Issue from '../lib/records/Issue'

const Actions = {
  SET_ISSUE_TITLE: 'issue_new/set_issue_title',
}

export default Actions

export function setIssueTitle(title) {
  return {
    type: Actions.SET_ISSUE_TITLE,
    title: title
  }
}
