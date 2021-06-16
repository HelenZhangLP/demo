import React from 'react'

function New(props) {
  return <button className="btn btn-info" onClick={props.fn}>{props.name}</button>
}

export default New
