import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './userlist'
import UserForm from './userform'

class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div>
        <h2>
          This is a Home.
        </h2>
        <div> 
          <UserForm/>
        </div> 
        <div>
          <UserList/>
        </div>
      </div>
    )
  }
}

export default Home
