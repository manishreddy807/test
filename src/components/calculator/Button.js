import React from 'react'

export default function Button(props) {
    console.log(props.label)
  return (
    <div>
        <input type="button" value={props.label} onClick={props.handleClick} />
    </div>
  )
}
