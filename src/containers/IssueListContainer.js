import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { findIssues } from '../actions/issue'

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

  render() {
    console.log("styles", styles)
    return (
      <div className={styles.base}>
        IssueListContainer!!!
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
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
