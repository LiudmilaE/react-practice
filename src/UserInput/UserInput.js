import React, { Component } from 'react'

const userInput = (props) => {
        return (
            <lable> Please, type the author's name
                <br /> 
                <input type="text" 
                    placeholder="The name"
                    value={props.startingName}
                    onChange={props.changed}/>
            </lable>
        )
}

export default userInput