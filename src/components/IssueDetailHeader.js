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
          <div styleName="item-labels">
            assign
          </div>
          <div styleName="item-labels">
            labels
          </div>
        </div>
        <div styleName="assign-label-wrapper">
          <div styleName="items">
            User Name Here
          </div>
          <div styleName="items">
            <span>label1</span><span>label2</span>
          </div>
        </div>
        <div styleName="assign-label-wrapper">
          <div styleName="item-labels">
            created
          </div>
          <div styleName="item-labels">
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
