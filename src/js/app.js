import React from 'react';
import UserList from './components/userlist'

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        	<div>
        		<h1>This is App!</h1>
        		<UserList/>
        	</div>
      	);
    }
}

export default App;
