import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  setIssueTitle,
} from '../actions/issueNew'

import IssueNewHeader from '../components/IssueNewHeader'

import styles from './IssueNewContainer.scss'

class IssueNewContainer extends Component {

  onChangeTitle(title) {
    this.props.setIssueTitle(title)
  }

  render() {
    const {issueNewManager} = this.props
    return (
      <div className={styles.base}>
        IssueNewContainer!!!
        <IssueNewHeader
          issueNewManager={issueNewManager}
          onChangeTitle={this.onChangeTitle.bind(this)}
        />
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
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueNewContainer, styles)
