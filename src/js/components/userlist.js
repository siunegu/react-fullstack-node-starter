import React from 'react';
import $ from 'jquery';

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
        	data: []
        }
        this.loadUsersFromServer = this.loadUsersFromServer.bind(this)
    }
    loadUsersFromServer() {
    	$.ajax({
    		url: 'http://localhost:3000/api/users',
    		dataType: 'json',
    		cache: false,
    		success: (data) => {
    			console.log(data)
    			this.setState({
    				data: data
    			})
    		}
    	})
    }
    componentDidMount() {
    	this.loadUsersFromServer()
    }
    render() {
    		let itemList = this.state.data.map((item, i) => {
    			return(
        		<tr
        			key={item._id}>
        			<td>{item.firstName}</td>
        			<td>{item.lastName}</td>
        			<td>{item.email}</td>
        			<td>{item.createdAt}</td>
        		</tr>
  				)
    		});
        return (
	        <table>
	        	<tbody>	
	        		<tr>
	        			<th>First Name</th>
	        			<th>Last Name</th>
	        			<th>Email</th>
	        			<th>Created At</th>
	        		</tr>
	        		{itemList}
	        	</tbody>	
	        </table>        	
				);
    }
}

export default UserList;
