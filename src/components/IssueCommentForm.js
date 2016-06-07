import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'

import styles from './IssueCommentForm.scss'

class IssueCommentForm extends Component {
  render() {
    return (
      <div styleName="base">
        <div>
          User Name Here
          <textarea />
        </div>
        <div>
          Comment Here
          <textarea />
        </div>
      </div>
    )
  }
}

export default CSSModules(IssueCommentForm, styles)
