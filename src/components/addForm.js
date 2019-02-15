import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {required, nonEmpty} from '../validators';
import Input from './input';



export class AddForm extends React.Component {

    onSubmit(values) {
        if(this.props.addingTo === 'fridge' && this.props.addingTo !== ''){
        return fetch('https://fridgeapp-backend.herokuapp.com/api/item', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.props.authToken}`
            }
        })
            .then(res => {
                if (!res.ok) {
                    if (
                        res.headers.has('content-type') &&
                        res.headers
                            .get('content-type')
                            .startsWith('application/json')
                    ) {
                        // It's a nice JSON error returned by us, so decode it
                        return res.json().then(err => Promise.reject(err));
                    }
                    // It's a less informative error returned by express
                    return Promise.reject({
                        code: res.status,
                        message: res.statusText
                    });
                }
                return;
            })
            .then(this.props.history.push('/fridge'))
            .catch(err => {
                const {reason, message, location} = err;
                if (reason === 'ValidationError') {
                    // Convert ValidationErrors into SubmissionErrors for Redux Form
                    return Promise.reject(
                        new SubmissionError({
                            [location]: message
                        })
                    );
                }
                return Promise.reject(
                    new SubmissionError({
                        _error: 'Error submitting message'
                    })
                );
            });
    } else if(this.props.addingTo === 'pantry'){
        return fetch('https://fridgeapp-backend.herokuapp.com/api/pantry', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json',
             Authorization: `Bearer ${this.props.authToken}`
        }
    })
        .then(res => {
            if (!res.ok) {
                if (
                    res.headers.has('content-type') &&
                    res.headers
                        .get('content-type')
                        .startsWith('application/json')
                ) {
                    // It's a nice JSON error returned by us, so decode it
                    return res.json().then(err => Promise.reject(err));
                }
                // It's a less informative error returned by express
                return Promise.reject({
                    code: res.status,
                    message: res.statusText
                });
            }
            return;
        })
        .then(() => this.props.history.push('/pantry'))
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
            return Promise.reject(
                new SubmissionError({
                    _error: 'Error submitting message'
                })
            );
        });
        
        }
    }
    

    render() {
        return (
            <div className ="home">
                <form className ="login-form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>

                    <label htmlFor ="itemName">Add item to: {this.props.addingTo}</label>
                    <Field
                    name="itemName"
                    type="text"
                    component={Input}
                    label="Item Name:"
                    validate={[required, nonEmpty]}
                    />
                    <Field
                        name="expirationDate"
                        type="date"
                        component={Input}
                        label="Expiration Date:"  
                        validate={required}
                    />
                    <button
                        className ="submit-button"
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}>
                        Add new Item
                    </button>
                    <Link className= "cancel" to={this.props.addingTo === 'fridge'? '/fridge': '/pantry'}>
                    <button>Cancel</button>
                    </Link>
                </form>
            </div>
        );
    }
}
 
const mapStateToProps = state => ({
     authToken: state.auth.authToken,
     addingTo: state.food.addingTo  
 })


AddForm = connect(mapStateToProps)(AddForm);

export default reduxForm({
    form: 'add',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('add', Object.keys(errors)[0]))
})(AddForm);






