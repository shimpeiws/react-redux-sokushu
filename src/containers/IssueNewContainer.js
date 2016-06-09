import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import styles from './IssueNewContainer.scss'

class IssueNewContainer extends Component {
  render() {
    return (
      <div className={styles.base}>
        IssueNewContainer!!!
      </div>
    )
  }
}

IssueNewContainer.contextTypes = {
  router: PropTypes.object.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueNewContainer, styles)
