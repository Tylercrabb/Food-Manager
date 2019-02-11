import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import{setErrorMessage} from '../actions'

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        if (this.props.error) {
            this.props.dispatch(setErrorMessage('Invalid Login Credentials'))
            // error = (
            //     <div className="form-error" aria-live="polite">
            //         {this.props.error}
            //     </div>
            // );
        }
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {/* {error} */}
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                />
                <button disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>
                <p>test account</p>
                <p>username: username1</p>
                <p>password: password22</p>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);