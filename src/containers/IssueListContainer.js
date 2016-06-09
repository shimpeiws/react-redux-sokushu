import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Loader from 'react-loader'

import { findIssues } from '../actions/issue'

import IssueListHeader from '../components/IssueListHeader'
import IssueList from '../components/IssueList'

import styles from './IssueListContainer.scss'

class IssueListContainer extends Component {
  componentDidMount() {
    this.init()
  }

  init() {
    this.props.findIssues()
  }

  onClickRow(issue) {
    this.context.router.push(`/${issue.id}`)
  }

  render() {
    const { issues, issueManager, issueListManager } = this.props
    console.log("issueManager", issueManager)
    return (
      <div className={styles.base}>
        <Loader loaded={!issueListManager.loading}>
          <Link to="/new">Create Issue</Link>
          <IssueListHeader />
          <IssueList
            issues={issues}
            onClickRow={this.onClickRow.bind(this)}
          />
        </Loader>
      </div>
    )
  }
}

IssueListContainer.contextTypes = {
  router: PropTypes.object.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return {
    issues: state.issue.issueList,
    issueManager: state.issue.issueManager,
    issueListManager: state.issue.issueListManager,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    findIssues,
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueListContainer, styles)
