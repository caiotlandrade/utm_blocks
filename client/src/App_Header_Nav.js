import React, { Component } from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import './css/foundation.css';
import './App.css';

class App_Header_Nav extends Component {
  constructor() {
    super();
    this.state = {
      // the initial state is coming now from the server
      // (while we don't build the database)
      
    }
    this.addNewURL = this.addNewURL.bind(this);
    this.addNewWebsite = this.addNewWebsite.bind(this);
    this.addNewSource = this.addNewSource.bind(this);
    this.addNewMedium = this.addNewMedium.bind(this);
  }

  // getting the initial state from the server
  // for now, it's getting a object from the server.js file (not from the DB)
  componentWillMount() {
		let initialState = {};
		axios.get('http://localhost:8080/api/initialState')
		.then(result => {
			console.log("success");
			console.log(result.data);
			initialState = result.data;
			this.setState(initialState);
		})
		.catch(error => {
			console.log(error);
			console.log("error");
		})
	}


  // *** FUNCTIONS FOR THE FORMS *** \\

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
    console.log(this.state);
  }

  // this function ads a new URL to the urls database and plug the response to the state
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
    console.log(this.state);
  }

  // this function ads a new URL to the urls database and plug the response to the state
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
        medium: mediaCopy
      }
    );
    alert(newMedium);
    console.log(this.state);
  }


  render() {
    let views;
    if (Object.keys(this.state).length === 0) {
      views = (
        <div>
          <img src="/loading.gif" alt="loading gif" />
        </div>
      )
    } else {
      views = (
        <div className="small-12 cell">
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
      )
    }

    return (
      <div>
        <header className="App top-bar grid-x">
          <h2 className="top-bar_logo">Header</h2>
        </header>
        <div className="App-body grid-x">
          <nav className="side_menu vertical menu columns medium-2 small-12 cell">
            <ul className="small-12">
              <li className="small-12"><Link to="/url_list"> URL_List </Link></li>
              <li className="small-12"><Link to="/account_setup"> Account_Setup </Link></li>
              <li className="small-12"><Link to="/settings"> Settings </Link></li>
              <li className="small-12"><Link to="/new_url"> New_URL </Link></li>
            </ul>
          </nav>
              <div className="small-12 medium-10 cell">
                <main className="grid-x">
                  {views}
                </main>
              </div>
        </div>
      </div>
    );
  }
}

export default App_Header_Nav;
