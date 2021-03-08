import React from 'react';

export class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        this.setState({email: '', password: ''});

    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with you email and password</span>
                <form onSubmit={this.handleSubmit} >
                    <input name="email" value={this.state.email} onChange={this.handleChange} required />
                    <label>Email</label>
                    <input name="password" value={this.state.password} onChange={this.handleChange} required />
                    <label>Password</label>
                    <input type="submit" value="Submit Form" />
                </form>
            </div>
        );
    }
}
