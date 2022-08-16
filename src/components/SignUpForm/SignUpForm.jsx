import { Component, useState } from 'react'
import { signUp } from '../../utilities/users-service'
import './SignUpForm.css'
export default class SignUpForm extends Component {
 
  
  
  state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    }

    handleChange = (evt) => {
      this.setState({
          [evt.target.name]: evt.target.value,
          error: ''
      })
    }

    handleSubmit = async (evt) => {
      evt.preventDefault();
      try {
        // We don't want to send the 'error' or 'confirm' property,
        //  so let's make a copy of the state object, then delete them
        const formData = {...this.state}
        delete formData.error
        delete formData.confirm
        // The promise returned by the signUp service method 
        // will resolve to the user object included in the
        // payload of the JSON Web Token (JWT)
        const user = await signUp(formData)
        this.props.setUser(user)
      } catch(err) {
        // An error occurred
        console.log(err)
        this.setState({error: 'Sign Up Failed - Try Again'})
      }
    }


    render() {
      const disable = this.state.password !== this.state.confirm;
      return (
        
        <div className="Auth-form-container">
      <form className="Auth-form" 
      autoComplete="off" 
      onSubmit={this.handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <img src="https://identity.lego.com/assets/images/parentAtDeskWithComputer@4x-44768ff9f5c861e8f17500ea00afea18.png" alt="" />
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              name="name" 
              value={this.state.name} 
              onChange={this.handleChange} required
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              value={this.state.email} 
              onChange={this.handleChange} required
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password" 
              value={this.state.password} 
              onChange={this.handleChange} required
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm</label>
            <input
              type="password"
              name="confirm" 
              value={this.state.confirm} 
              onChange={this.handleChange} required
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
      );
    }
  }