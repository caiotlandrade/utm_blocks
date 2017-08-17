import React, { Component } from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import './App.css';

class App_Header_Nav extends Component {
  constructor() {
    super();
    this.state = {
      urls: [
        {
          key: 0,
          created_at: 'now',
          updated_at: 'now',
          original_url: 'https://www.example.com',
          campaign_source: 'google',
          campaign_medium: 'cpm',
          campaign_name: '',
          campaign_term: '',
          campaign_content: '',
          final_url: 'https://www.example.com/?utm_source=google&utm_medium=cpc',
          shortened_url: 'https://goo.gl/ebqs2I',
          account_key: 0,
          user_key: 0
        }
      ],
      websites: [],
      sources: [],
      media: []
    }
  }

  render() {
    return (
      <div>
        <div className="App">
          <h2>Header</h2>
        </div>
        <div>
          <div><Link to="/url_list"> URL_List </Link></div>
          <div><Link to="/account_setup"> Account_Setup </Link></div>
          <div><Link to="/settings"> Settings </Link></div>
          <div><Link to="/new_url"> New_URL </Link></div>
        </div>
        <div className="">
          {React.cloneElement(this.props.children, 
            {
              urls: this.state.urls,
              websites: this.state.websites,
              sources: this.state.sources,
              media: this.state.media
            }
          )}
        </div>
      </div>
    );
  }
}

export default App_Header_Nav;
