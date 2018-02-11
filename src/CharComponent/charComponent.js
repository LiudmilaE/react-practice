import React from 'react'
import './charComponent.css'

const charComponent = (props) => {
    return (
        <div className="Char" onClick={props.removeChar}>{props.char}</div>
    )
}

export default charComponent