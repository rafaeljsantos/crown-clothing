import React from 'react';

import { FormInput } from '../form-input/form-input.component';
import { CustomButton} from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

export class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({...this.state, [e.target.name]: e.target.value});
    }

    async handleSubmit(e) {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert("passwords don't match");
            return;
        } else {
        
            try {

                const { user } = await auth.createUserWithEmailAndPassword(email, password);
                await createUserProfileDocument(user, {  displayName });

                console.log(user);

                this.setState({
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                });
 
            }catch(error) {
                console.log(error);
            }

        }

    }

    render () {
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="text" 
                        name="displayName" 
                        value={this.state.displayName}
                        label="Name"
                        onChange={this.handleChange}
                        required />

                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        label="Email"
                        onChange={this.handleChange}
                        required />

                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        label="Password"
                        onChange={this.handleChange}
                        required />

                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        label="Confirm Password"
                        onChange={this.handleChange}
                        required />

                    <CustomButton type="submit" onClick={this.handleSubmit}>SIGN UP</CustomButton>

                </form>
            </div>
        );
    }
}
