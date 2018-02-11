import React from 'react'

const userInput = (props) => {
        return (
            <label> Please, type the author's name
                <br /> 
                <input type="text" 
                    placeholder="The name"
                    value={props.startingName}
                    onChange={props.changed}/>
            </label>
        )
}

export default userInput