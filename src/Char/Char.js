import React from 'react'
import './Char.css'

const char = (props) => {
    return (
        <div className="Char" onClick={props.removeChar}>{props.char}</div>
    )
}

export default char