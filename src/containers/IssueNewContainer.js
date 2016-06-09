import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Loader from 'react-loader'

import {
  setIssueTitle,
  createIssue,
} from '../actions/issueNew'

import IssueNewHeader from '../components/IssueNewHeader'

import styles from './IssueNewContainer.scss'

class IssueNewContainer extends Component {

  onChangeTitle(title) {
    this.props.setIssueTitle(title)
  }

  onCreateIssue() {
    this.props.createIssue()
  }

  render() {
    const {issueNewManager} = this.props
    return (
      <div className={styles.base}>
        <Loader loaded={!issueNewManager.loading}>
          IssueNewContainer!!!
          <IssueNewHeader
            issueNewManager={issueNewManager}
            onChangeTitle={this.onChangeTitle.bind(this)}
            onCreateIssue={this.onCreateIssue.bind(this)}
          />
        </Loader>
      </div>
    )
  }
}

IssueNewContainer.contextTypes = {
  router: PropTypes.object.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return {
    issueNewManager: state.issue.issueNewManager,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setIssueTitle,
    createIssue,
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueNewContainer, styles)
