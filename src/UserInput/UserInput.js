import React, { Component } from 'react'

const userInput = (props) => {
        return (
            <lable> Please, type the author's name
                <br /> 
                <input type="text" 
                    placeholder="The name"
                    value={props.startingName}
                    style = {{
                        width: "50%",
                        margin: "10px auto",
                        padding: "15px",
                        display: "inline-block",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        boxSizing: "border-box",
                    }}
                    onChange={props.changed}/>
            </lable>
        )
}

export default userInput