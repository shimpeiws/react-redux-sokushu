import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IssueDetailHeader from '../components/IssueDetailHeader'

import { findIssueDetail } from '../actions/issueDetail'

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

  render() {
    const { issueDetail } = this.props

    return (
      <div className={styles.base}>
        <IssueDetailHeader
          issue={issueDetail}
        />
        IssueDetailContainer!!!
        {issueDetail.id}
        {issueDetail.title}
        {issueDetail.status}
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
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueDetailContainer, styles)
