import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'

import { STATE } from './../lib/records/Issue'

import styles from './IssueDetailHeader.scss'

class IssueDetailHeader extends Component {
  constructor(props) {
    super(props)
    console.log("this.props.issue.title", this.props.issue.title)
    this.state = {
      title: this.props.issue.title,
    }
  }

  onChangeTitle(e) {
    this.setState('title', e.target.value)
  }

  render() {
    const { issue } = this.props
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
          { this.props.isTitleEditing ? (<div>
              <div styleName="title">
                <input
                  type="text"
                  value={this.state.title}
                  onChange={this.onChangeTitle.bind(this)}
                />
                <div
                  styleName="edit-button"
                  onClick={this.props.onClickTitleSave}
                >
                  Save
                </div>
              </div>
            </div>) : (
            <span>
              <div styleName="title">
                {issue.title}
              </div>
              <div styleName="edit-button" onClick={this.props.onClickTitleEdit}>
                Edit
              </div>
            </span>
            )
          }
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
