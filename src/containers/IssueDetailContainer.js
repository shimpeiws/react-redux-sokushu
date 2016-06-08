import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IssueDetailHeader from '../components/IssueDetailHeader'
import IssueCommentList from '../components/IssueCommentList'
import IssueCommentForm from '../components/IssueCommentForm'

import {
  findIssueDetail,
  addComment,
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

  render() {
    const { issueDetail } = this.props
    console.log("issueDetail.comments", issueDetail.comments)
    return (
      <div className={styles.base}>
        <IssueDetailHeader
          issue={issueDetail}
        />
        <div className={styles.main}>
          <IssueCommentList
            comments={issueDetail.comments}
          />
          <IssueCommentForm
            onClickComment={this.onClickComment.bind(this)}
          />
        </div>
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    findIssueDetail,
    addComment,
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueDetailContainer, styles)
