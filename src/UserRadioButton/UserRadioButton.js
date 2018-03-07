import React, { Component } from 'react';

import './UserRadioButton.css';

class UserRadioButton extends Component{

    componentWillReceiveProps(prevProps) {
        if(prevProps.checked) {  }
    }


    render() {
        return (
            <label 
                className="container">
                {this.props.value}
                <input type="radio"
                    checked={this.props.checked}
                    value={this.props.value}
                    name="radio"
                    onChange={this.props.onChange}
                    className={this.props.checked ? "checked" : null}/>
                <span className="checkmark"></span>
            </label>
        );
    }
}

export default UserRadioButton;