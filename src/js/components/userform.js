import React from 'react';
import $ from 'jquery';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
        	user: {
                firstName: null,
                lastName: null,
                email: null
            }
        }
        this.formValidated = false;

        this.postUserToServer = this.postUserToServer.bind(this)
        this.validateForm = this.validateForm.bind(this)
        this.saveUser = this.saveUser.bind(this)
    }
    postUserToServer(payload) {
    	$.ajax({
    		url: 'http://localhost:3000/api/users',
            method: 'post',
            data: payload,
    		dataType: 'json',
    		cache: false
    	})
        .done((response) => { 
            console.log('response: ', response)
        })
        .fail((err) => {
            console.log('error: ', err)
        })
    }
    componentDidMount() {
    }
    saveUser(e) {
        console.log(this)
        this.postUserToServer(this.state.user)

        // this.clearForm()
    }
    validateForm(e) {
        let newUser = {}
        let form = $('#user-form')

        newUser.firstName = form.find('#user-firstname').val();
        newUser.lastName  = form.find('#user-lastname').val();
        newUser.email     = form.find('#user-email').val();
        
        this.setState({user: newUser})

        if (newUser.firstName && newUser.lastName && newUser.email) {
            this.formValidated = true;
        }
    }
    clearForm() {
        var form = $('#contact_form');

        form.find('#user-firstname').val('');
        form.find('#user-lastname').val('');
        form.find('#user-email').val('');     
    }
    render() {
        return (
            <form id="user-form">
                <div className="input-field">
                    <label htmlFor="user-firstname">First Name</label>            
                    <input id="user-firstname" type="text" className="validate" onKeyUp={this.validateForm}/>
                </div>
                <div className="input-field">
                    <label htmlFor="user-lastname">Last Name</label>            
                    <input id="user-lastname" type="text" className="validate" onKeyUp={this.validateForm}/>
                </div>
                <div className="input-field">
                    <label htmlFor="user-email">Email</label>            
                    <input id="user-email" type="text" className="validate" onKeyUp={this.validateForm}/>
                </div>
                <div className="input-field">
                    <input type="submit" value="Make it!" className={this.formValidated ? 'submit-btn' : 'hidden-btn'} onClick={this.saveUser}/>
                </div>

            </form>
			    );
    }
}

export default UserForm;
