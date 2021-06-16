import React from 'react'

class Dialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      select: true
    }
  }
  render() {
    const {title} = this.props;
    const {select} = this.state
    return <div>
      <div className="mask"></div>
      <div className="dialog">
        <div className="title">{title}</div>
        <div>
          <label for="selector" className="el-label">checkBox:</label>
          <div className={`el-select ${select ? 'el-selected' : ''}`}>
            <input type='select' value="slect time" readonly="readonly" />
          </div>
          <ul className="el-options">
            <li className="el-options-item">124</li>
            <li className="el-options-item">124</li>
            <li className="el-options-item">124</li>
          </ul>
        </div>
        <div className="mt-10">
          <label for="selector" className="el-label">area:</label>
          <textarea></textarea>
        </div>
      </div>
    </div>
  }
}

export default Dialog
