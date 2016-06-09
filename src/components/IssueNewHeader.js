import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'

import styles from './IssueNewHeader.scss'

class IssueNewHeader extends Component {
  constructor(props) {
    super(props)
  }

  onChangeTitle(e) {
    this.props.onChangeTitle(e.target.value)
  }

  onCreateIssue(e) {
    this.props.onCreateIssue()
  }

  render() {
    const { title } = this.props.issueNewManager
    return (
      <div styleName="base">
        <input
          type="text"
          value={title}
          onChange={this.onChangeTitle.bind(this)}
        />
        <span onClick={this.onCreateIssue.bind(this)}>Create</span>
      </div>
    )
  }
}

IssueNewHeader.propTypes = {
  issueNewManager: PropTypes.object.isRequired,
  onChangeTitle: PropTypes.func.isRequired,
  onCreateIssue: PropTypes.func.isRequired,
}

export default CSSModules(IssueNewHeader, styles)
