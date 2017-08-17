import React, { Component } from 'react';
import {Link} from 'react-router';
import '../App.css';

class URL_List extends Component {

    render() {
      return (
        <div className="App">
          <h2>URL list</h2>
          <div>
            <div><Link to="/new_url"> New_URL </Link></div>
          </div>
        </div>
      );
    }
  }
  
  export default URL_List;