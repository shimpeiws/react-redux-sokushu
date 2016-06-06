import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'

import styles from './IssueListItem.scss'

class IssueListItem extends Component {
  render() {
    const { issue } = this.props

    return(
      <div styleName="base">
        {issue.id}
        {issue.title}
      </div>
    )
  }
}

export default CSSModules(IssueListItem, styles)
