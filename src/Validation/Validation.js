import React, { Component } from 'react'

const validation = (props) => {
    return <p> {props.length > 10 ? "Text long enough" : "Text too short"} </p>
}

export default validation