import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import {connect} from 'react-redux'
import Input from './input';
import './form.css'

export class AddForm extends React.Component {
    state={
        addingTo: 'fridge'
    }
    onSubmit(values) {
        if(this.state.addingTo === 'fridge'){
            const authToken = this.props.authToken;
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
            .then(() => console.log('Submitted with values', values))
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
    } else if(this.state.addingTo === 'pantry'){
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
        .then(() => console.log('Submitted with values', values))
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
    onFridgeClick(e){
        this.setState({
            addingTo: 'fridge'
        })
       
        
    }

    onPantryClick(){
        this.setState({
            addingTo: 'pantry'
        })
    }

    render() {
        let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="message message-success">
                    your item was added to the {this.state.addingTo}
                </div>
            );
        }

        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message message-error">{this.props.error}</div>
            );
        }

        return (
            
            <div className= "form-holder">
            <form className ="add-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {successMessage}
                {errorMessage}
                <p>Add item to: {this.state.addingTo}</p>
                <button
                className ='blank'
                onClick={e =>{
                    e.preventDefault()
                   this.onFridgeClick(e)
                }}
                >Fridge</button>
                <button
                onClick={e => {
                    e.preventDefault()
                    
                    this.onPantryClick(e)
                }}
                >
                Pantry</button>
                <Field
                    name="itemName"
                    type="text"
                    component={Input}
                    label="Item Name:"
                    
                />
                <Field
                    name="expirationDate"
                    type="date"
                    component={Input}
                    label="Expiration Date:"
                    
                />
                
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Add new Item
                </button>
            </form>
            </div>
        );
    }
}
 const mapStateToProps = state => ({
     authToken: state.auth.authToken
     
 })

AddForm = connect(mapStateToProps)(AddForm);

export default reduxForm({
    form: 'add',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('add', Object.keys(errors)[0]))
})(AddForm);






