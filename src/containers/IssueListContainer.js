import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { findIssues } from '../actions/issue'

import IssueList from '../components/IssueList'

import styles from './IssueListContainer.scss'

class IssueListContainer extends Component {
  componentDidMount() {
    this.init()
  }

  init() {
    try {
      this.props.findIssues()
    } catch(error) {
    }
  }

  onClickTitle(issue) {
    this.context.router.push(`/${issue.id}`)
  }

  render() {
    const { issues } = this.props
    return (
      <div className={styles.base}>
        IssueListContainer!!!
        <Link to="/new">Create Issue</Link>
        <IssueList
          issues={issues}
          onClickTitle={this.onClickTitle.bind(this)}
        />
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
