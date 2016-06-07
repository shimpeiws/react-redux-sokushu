import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'

import { STATE } from './../lib/records/Issue'

import styles from './IssueDetailHeader.scss'

class IssueDetailHeader extends  Component {
  render() {
    const { issue } = this.props
    console.log("issue.status", issue.status)
    return (
      <div styleName="base">
        <div>
          {
            issue.status === STATE.OPEN ?
            <i className="fa fa-check-circle-o" /> :
            <i className="fa fa-times-circle-o" />
          }
          {issue.status}
        </div>
        <div styleName="title-wrapper">
          <div styleName="title">
            {issue.title}
          </div>
          <div styleName="edit-button">
            edit
          </div>
        </div>
        <div styleName="assign-label-wrapper">
          <div styleName="items">
            assign
          </div>
          <div styleName="items">
            labels
          </div>
        </div>
        <div styleName="assign-label-wrapper">
          <div styleName="items">
            assign
          </div>
          <div styleName="items">
            labels
          </div>
        </div>
        <div styleName="assign-label-wrapper">
          <div styleName="items">
            created
          </div>
          <div styleName="items">
            updated
          </div>
        </div>
        <div styleName="assign-label-wrapper">
          <div styleName="items">
            {issue.created}
          </div>
          <div styleName="items">
            {issue.updated}
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(IssueDetailHeader, styles)
