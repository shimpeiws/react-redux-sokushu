import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Loader from 'react-loader'

import IssueDetailHeader from '../components/IssueDetailHeader'
import IssueCommentList from '../components/IssueCommentList'
import IssueCommentForm from '../components/IssueCommentForm'

import {
  findIssueDetail,
  addComment,
  changeTitleEditing,
} from '../actions/issueDetail'

import styles from './IssueDetailContainer.scss'

class IssueDetailContainer extends Component {
  componentDidMount() {
    this.init()
  }

  init() {
    console.log("this.props.params", this.props.params.id)
    try {
      this.props.findIssueDetail(this.props.params.id)
    } catch(error) {
    }
  }

  onClickComment(comment) {
    console.log("comment", comment)
    this.props.addComment(this.props.issueDetail, comment)
  }

  onClickTitleEdit() {
    this.props.changeTitleEditing(true)
  }

  onClickTitleSave() {
    this.props.changeTitleEditing(false)
  }

  render() {
    const { issueDetail, issueDetailManager } = this.props
    console.log("issueDetailManager.loading", issueDetailManager.loading)
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
            <IssueCommentList
              comments={issueDetail.comments}
            />
            <IssueCommentForm
              onClickComment={this.onClickComment.bind(this)}
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
    changeTitleEditing,
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueDetailContainer, styles)
