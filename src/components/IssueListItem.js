import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'

import styles from './IssueListItem.scss'

class IssueListItem extends Component {
  onCickTitle(e) {
    this.props.onClickTitle(this.props.issue)
  }

  render() {
    const { issue } = this.props

    return(
      <div styleName="base">
        <div styleName="row">{issue.id}</div>
        <div styleName="row-3"
          onClick={this.onCickTitle.bind(this)}
        >
          {issue.title}
        </div>
        <div styleName="row-2">{issue.status}</div>
        <div styleName="row">
          {
            issue.assignee.id ? (issue.assignee.name) : ("-")
          }
        </div>
        <div styleName="row">{issue.comment_count}</div>
        <div styleName="row-3">{issue.created}</div>
        <div styleName="row-3">{issue.updated}</div>
      </div>
    )
  }
}

export default CSSModules(IssueListItem, styles)
