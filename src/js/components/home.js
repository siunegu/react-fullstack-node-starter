import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './userlist'

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
          <UserList/>
        </div>
      </div>
    )
  }
}

export default Home
