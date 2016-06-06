import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'

import IssueListItem from './IssueListItem'
import styles from './IssueList.scss'

class IssueList extends Component {
  render() {
    const { issues } = this.props

    return(
      <div styleName="base">
        Issue List!!!
        {
          issues.map((issue) => {
            return (<IssueListItem
              key={issue.id}
              issue={issue}
            />)
          })
        }
      </div>
    )
  }
}

export default CSSModules(IssueList, styles)
