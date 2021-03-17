import React from 'react';

import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
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

    async handleSubmit(event) {
        event.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch(error) {
            alert(error);
            console.log(error);
        }
        
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
                        
                    <div className="buttons">
                        <CustomButton type="submit" onClick={this.handleSubmit}>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}
