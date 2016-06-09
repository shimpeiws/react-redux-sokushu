import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'

import styles from './IssueListHeader.scss'

class IssueListHeader extends Component {
  render() {
    return (
      <div styleName="base">
        <div styleName="left">
          <span styleName="item" onClick={this.props.onClickOpen}>Open</span>
          <span styleName="item" onClick={this.props.onClickClose}>Close</span>
        </div>
        <div styleName="right">
          <span styleName="item">Assignee</span>
          <span styleName="item">Label</span>
          <span styleName="item">Sort</span>
          <span styleName="item"><Link to="/new">Create Issue</Link></span>
        </div>
      </div>
    )
  }
}

export default CSSModules(IssueListHeader, styles)
