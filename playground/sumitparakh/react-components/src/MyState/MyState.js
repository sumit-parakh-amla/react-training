import React from 'react';

export class MyState extends React.Component {

    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: ''
        };
    }

    onFirstNameChange(e) {
        this.setState({
            firstName: e.target.value.toUpperCase()
        })
    }

    render() {

        const onLastNameChange = (e) => {
            const finalLastName = e.target.value.toUpperCase();
            this.setState({
                lastName: finalLastName
            })
        }

        return <div>
            <input type="text" name="firstName" onChange={this.onFirstNameChange.bind(this)} />
            <input type="text" name="lastName" onChange={onLastNameChange} />
            <label>{this.state.firstName} {this.state.lastName}</label>
        </div>
    }
}