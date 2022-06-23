import React from 'react'
import OutputScreen from './OutputScreen'

export default function Output(props) {
    console.log(props.question)
  return (
    <div>
        <OutputScreen value = {props.question} />
        <OutputScreen value = {props.answer} />
    </div>
  )
}
