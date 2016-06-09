import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Loader from 'react-loader'

import IssueDetailHeader from '../components/IssueDetailHeader'
import IssueCommentList from '../components/IssueCommentList'
import IssueCommentForm from '../components/IssueCommentForm'
import IssueDescription from '../components/IssueDescription'

import {
  findIssueDetail,
  addComment,
  updateComment,
  deleteComment,
  changeTitleEditing,
  updateIssue,
} from '../actions/issueDetail'

import styles from './IssueDetailContainer.scss'

class IssueDetailContainer extends Component {
  componentDidMount() {
    this.init()
  }

  init() {
    this.props.findIssueDetail(this.props.params.id)
  }

  onClickCommentSave(comment) {
    if (comment.id) {
      this.props.updateComment(this.props.issueDetail, comment)
    } else {
      this.props.addComment(this.props.issueDetail, comment)
    }
  }

  onClickCommentDelete(comment) {
    this.props.deleteComment(this.props.issueDetail, comment)
  }

  onClickTitleEdit() {
    this.props.changeTitleEditing(true)
  }

  onClickTitleSave(issue) {
    this.props.changeTitleEditing(false)
    this.props.updateIssue(issue)
  }

  onClickChangeStatus(issue) {
    this.props.updateIssue(issue)
  }

  render() {
    const { issueDetail, issueDetailManager } = this.props
    return (
      <div className={styles.base}>
        <Loader loaded={!issueDetailManager.loading}>
          <IssueDetailHeader
            issue={issueDetail}
            isTitleEditing={issueDetailManager.isTitleEditing}
            onClickTitleEdit={this.onClickTitleEdit.bind(this)}
            onClickTitleSave={this.onClickTitleSave.bind(this)}
          />
          <div className={styles.main}>
            <IssueDescription
              issue={issueDetail}
            />
            <IssueCommentList
              comments={issueDetail.comments}
              onClickSave={this.onClickCommentSave.bind(this)}
              onClickDelete={this.onClickCommentDelete.bind(this)}
            />
            <IssueCommentForm
              issue={issueDetail}
              onClickComment={this.onClickCommentSave.bind(this)}
              onClickChangeStatus={this.onClickChangeStatus.bind(this)}
            />
          </div>
        </Loader>
      </div>
    )
  }
}

IssueDetailContainer.contextTypes = {
  router: PropTypes.object.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return {
    issueDetail: state.issue.issueDetail,
    issueDetailManager: state.issue.issueDetailManager,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    findIssueDetail,
    addComment,
    updateComment,
    deleteComment,
    changeTitleEditing,
    updateIssue,
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueDetailContainer, styles)
