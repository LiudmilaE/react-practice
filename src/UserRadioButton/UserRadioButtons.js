import React, { Component } from 'react';

import UserRadioButton from './UserRadioButton';

class UserRadioButtons extends Component {

    state = {
        selectedOption : null,
    };

    changeRadioButtonHandler = (event) => {
        event.preventDefault();
        console.log("in changeRadioButtonHandler",event.target.value)
        this.setState({
            selectedOption: event.target.value
        });
    };

    renderList () {
        return this.props.list.map((el, i) => {
            console.log(el.tag === this.props.selectedOption);
            return<UserRadioButton 
                value={el.tag} 
                key={i+el.tag}
                checked={el.tag === this.props.selectedOption}
                onChange={this.props.onChange}/>
            }
        )
    }

    render() {
        return this.renderList()
    }

   
}

export default UserRadioButtons;