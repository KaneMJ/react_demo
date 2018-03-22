import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            form: {
                email: '',
                password: ''
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

handleInputChange(event){
    const { name, value } = event.target;

    this.setState({
        form: {
            ...this.state.form,
            [name]: value
        }
    });
}

handleFormSubmit(event){
    event.preventDefault();
    console.log("Submitting Form!", this.state.form);
}

    render(){

        const { email, password } = this.state.form;

        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>I'm a form, sort of</h1>
                <div>
                    <label>Email</label>
                    <br/>
                    <input name="email" type="text" value={email} onChange={this.handleInputChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <br/>
                    <input name="password" type="password" value={password} onChange={this.handleInputChange}/>
                </div>
                <button>Login</button>
            </form>
        )
    }
}

export default Form;