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
          campaign_name: 'example',
          campaign_term: 'ex',
          campaign_content: 'ex2',
          final_url: 'https://www.example.com/?utm_source=google&utm_medium=cpc',
          shortened_url: 'https://goo.gl/ebqs2I',
          account_key: 0,
          user_key: 0
        }
      ],
      websites: [
        {
          key: 0,
          created_at: 'now',
          updated_at: 'now',
          website: 'https://www.example.com',
          account_key: 0,
          user_key: 0
        }
      ],
      sources: [
        {
          key: 0,
          created_at: 'now',
          updated_at: 'now',
          source: 'google',
          account_key: 0,
          user_key: 0
        }
      ],
      media: [
        {
          key: 0,
          created_at: 'now',
          updated_at: 'now',
          medium: 'cpc',
          account_key: 0,
          user_key: 0
        }
      ]
    }
    this.addNewURL = this.addNewURL.bind(this);
    this.addNewWebsite = this.addNewWebsite.bind(this);
    this.addNewSource = this.addNewSource.bind(this);
    this.addNewMedium = this.addNewMedium.bind(this);
  }


  // build functions for the forms
  // this function ads a new URL to the urls database and plug the response to the state
  addNewURL(  newOriginal_url, 
              newCampaign_source, 
              newCampaign_medium, 
              newCampaign_name, 
              newCampaign_term, 
              newCampaign_content){
    let newFinal_url = newOriginal_url + 
                "?utm_source=" + newCampaign_source +
                ( newCampaign_medium ? ("&utm_medium=" + newCampaign_medium) : '' ) + 
                ( newCampaign_name ? ("&utm_campaign=" + newCampaign_name) : '' ) + 
                ( newCampaign_term ? ("&utm_term=" + newCampaign_term) : '' ) + 
                ( newCampaign_content ? ("&utm_content=" + newCampaign_content) : '' );
    
    let urlsCopy = this.state.urls; // copy array before adding new entry
    // the idea is to make a http request (POST) with all arguments and then push the new added record to the component state
    urlsCopy.push({
      key: 0,
      created_at: 'now',
      updated_at: 'now',
      original_url: newOriginal_url,
      campaign_source: newCampaign_source,
      campaign_medium: newCampaign_medium,
      campaign_name: newCampaign_name,
      campaign_term: newCampaign_term,
      campaign_content: newCampaign_content,
      final_url: newFinal_url,
      shortened_url: 'https://goo.gl/ebqs2I',
      account_key: 0,
      user_key: 0
    })
    this.setState (
      {
        urls: urlsCopy
      }
    );
    alert (newFinal_url);
    console.log(this.state.urls);
    
  }

  // this function ads a new URL to the urls database and plug the response to the state
  // addNewWebsite
  addNewWebsite(newWebsite) {
    let websitesCopy = this.state.websites; // copy array before adding new entry
    // the idea is to make a http request (POST) with all arguments and then push the new added record to the component state
    websitesCopy.push({
      key: 0,
      created_at: 'now',
      updated_at: 'now',
      website: newWebsite,
      account_key: 0,
      user_key: 0
    })
    this.setState(
      {
        websites: websitesCopy
      }
    );
    alert(newWebsite);
    console.log(this.state.websites);
  }

  // this function ads a new URL to the urls database and plug the response to the state
  // addNewSource
  addNewSource(newSource) {
    let sourcesCopy = this.state.sources; // copy array before adding new entry
    // the idea is to make a http request (POST) with all arguments and then push the new added record to the component state
    sourcesCopy.push({
      key: 0,
      created_at: 'now',
      updated_at: 'now',
      source: newSource,
      account_key: 0,
      user_key: 0
    })
    this.setState(
      {
        sources: sourcesCopy
      }
    );
    alert(newSource);
    console.log(this.state.sources);
  }

  // this function ads a new URL to the urls database and plug the response to the state
  // addNewMedium
  addNewMedium(newMedium) {
    let mediaCopy = this.state.media; // copy array before adding new entry
    // the idea is to make a http request (POST) with all arguments and then push the new added record to the component state
    mediaCopy.push({
      key: 0,
      created_at: 'now',
      updated_at: 'now',
      medium: newMedium,
      account_key: 0,
      user_key: 0
    })
    this.setState(
      {
        sources: mediaCopy
      }
    );
    alert(newMedium);
    console.log(this.state.media);
  }


  render() {
    return (
      <div>
        <div className="App">
          <h2>Header</h2>
        </div>
        <div>
          <div><Link to="/url_polist"> URL_List </Link></div>
          <div><Link to="/account_setup"> Account_Setup </Link></div>
          <div><Link to="/settings"> Settings </Link></div>
          <div><Link to="/new_url"> New_URL </Link></div>
        </div>
        <div className="">
          {React.cloneElement(this.props.children, 
            {
              // passing all the state params
              urls: this.state.urls,
              websites: this.state.websites,
              sources: this.state.sources,
              media: this.state.media,
              // passing all functions to other components
              addNewURL: this.addNewURL,
              addNewWebsite: this.addNewWebsite,
              addNewSource: this.addNewSource,
              addNewMedium: this.addNewMedium
            }
          )}
        </div>
      </div>
    );
  }
}

export default App_Header_Nav;
