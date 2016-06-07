import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'

import styles from './IssueCommentForm.scss'

class IssueCommentForm extends Component {
  render() {
    return (
      <div styleName="base">
        <div styleName="header">
          <span styleName="input-label">
            User Name
          </span>
          <span styleName="user-input">
            <input type="text" />
          </span>
        </div>
        <div styleName="main">
          <div styleName="input-label">
            Comment Here
          </div>
          <textarea styleName="comment-text"/>
        </div>
        <div styleName="footer">
          <div styleName="close-issue-button">
            Close Issue
          </div>
          <div styleName="comment-button">
            Comment
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(IssueCommentForm, styles)
