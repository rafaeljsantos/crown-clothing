import React from 'react';

import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

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
                    <FormInput
                        name="email"
                        type="email" 
                        label="Email"
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        required
                    />
                    <FormInput 
                        name="password" 
                        type="password"
                        label="Password"
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        required/>
                        
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                </form>
            </div>
        );
    }
}
