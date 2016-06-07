import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'

import styles from './IssueDetailHeader.scss'

class IssueDetailHeader extends  Component {
  render() {
    const { issue } = this.props
    return (
      <div styleName="base">
        <div>
          {issue.status}
        </div>
        <div>
          {issue.title} <span>edit</span>
        </div>
        <div>
          <span>assign</span>
          <span>labels</span>
          <span>labels</span>
        </div>
      </div>
    )
  }
}

export default CSSModules(IssueDetailHeader, styles)
