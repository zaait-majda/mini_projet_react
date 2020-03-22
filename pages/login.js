// www/pages/login.js

import { Component } from 'react'
import { JSON} from 'body-parser'
import axios from 'axios'



class Login extends React.Component {
 
  constructor (props) {
    super(props)
 
    this.state = { username: '', password: '' }
    
  }

 
   handleSubmit= async ()=> {
   
    var details = {
      'username': this.state.username,
      'password': this.state.password,
    'accessToken':''

    
  };
  
  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  var accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFaRVJUWSIsImlkX2FkbWluIjo1LCJpYXQiOjE1ODQ3NTgxNDUsImV4cCI6MTU4NDc2MTc0NX0.nlGbmL1-7hrhQFlqcyVCDVcl-vBYtAc3C8twLxUq-c0';
    try {
     
      
    
    const bodyParameters = {
      username: this.state.username,
      password: this.state.password,
      
    };
    axios.post('http://localhost:3001/admins/signIn', {
      username  :this.state.username,
      password  :this.state.password,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+accessToken
    },     
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    } catch (error) {
      console.error(
        'You have an error in your code or there are Network issues.',
        error
      )
      throw new Error(error)
    }
  }

  render () {
    return (
    <div>
        <div className='login'>
         
            <label htmlFor='username'>GitHub username</label>

            <input
              type='text'
              id='username'
              name='username'
              value={this.state.username}
              onChange={e=>{this.setState({username:  e.target.value})}}
            />
            <input
              type='text'
              id='password'
              name='password'
              value={this.state.password}
              onChange={e=>{this.setState({password: e.target.value})}}
            />

            <button onClick={this.handleSubmit}>Login</button>

           
        </div>
        <style jsx>{`
          .login {
            max-width: 340px;
            margin: 0 auto;
            padding: 1rem;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          form {
            display: flex;
            flex-flow: column;
          }
          label {
            font-weight: 600;
          }
          input {
            padding: 8px;
            margin: 0.3rem 0 1rem;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          .error {
            margin: 0.5rem 0 0;
            display: none;
            color: brown;
          }
          .error.show {
            display: block;
          }
        `}</style>
    </div>
    )
  }
}

export default Login