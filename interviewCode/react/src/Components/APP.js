
import React from 'react';
import New from './newScheduleItem/index'
import Dialog from './Dialog/index'

class APP extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dialog: false
    }
  }
  show() {
    this.setState({
      dialog: !this.state.dialog
    })
  }
  render() {
    return <div className="container">
      <h2 className="title">schedule demo</h2>
      <New name="new" fn={this.show.bind(this)} />
      <Dialog title={this.state.dialog ? 'create schedule' : 'edit schedule'} />
    </div>
  };
}
export default APP
