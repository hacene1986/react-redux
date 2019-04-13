import React, { Component } from 'react';
import UserList from '../containers/User-list'
import DetailUser from '../containers/user_detail'
export default class App extends Component {
  render() {
    return (
      <div>
        <UserList/>
        <DetailUser/>
      </div>
    );
  }
}
