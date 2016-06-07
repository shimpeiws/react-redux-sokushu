import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'

import styles from './IssueCommentListItem.scss'

class IssueCommentListItem extends Component {
  render() {
    const { comment } = this.props

    return (
      <div styleName="base">
        <div styleName="header">
          <div styleName="header-name">
            {comment.userName}
          </div>
          <div styleName="header-date">
            {comment.updated}
          </div>
          <div styleName="header-icon">
            <i className="fa fa-pencil" />
          </div>
          <div styleName="header-icon">
            <i className="fa fa-trash" />
          </div>
        </div>
        <div styleName="main">
          {comment.content}
        </div>
      </div>
    )
  }
}

export default CSSModules(IssueCommentListItem, styles)
