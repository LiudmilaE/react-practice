import React from 'react'
import './charComponent.css'

const charComponent = (props) => {
    return (
        <div class="Char" onClick={props.removeChar}>{props.char}</div>
    )
}

export default charComponent