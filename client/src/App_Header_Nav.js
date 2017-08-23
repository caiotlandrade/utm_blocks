import React, { Component } from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import './css/foundation.css';
import './App.css';

class App_Header_Nav extends Component {
  constructor() {
    super();
    this.state = {
      account_id: 1,
      user_id: 1,
      websites: [],
      sources: [],
      media: [],
      urls:[],
      loaded: false,
    }
    this.addNewURL = this.addNewURL.bind(this);
    this.addNewWebsite = this.addNewWebsite.bind(this);
    this.addNewSource = this.addNewSource.bind(this);
    this.addNewMedium = this.addNewMedium.bind(this);
  }

  // getting the initial state from the server
  // for now, it's getting a object from the server.js file (not from the DB)
  componentWillMount() {
    // list all initial requests in an array for axios.all()
    let requests = [
      axios.get(`http://localhost:8080/api/website/${this.state.user_id}`),
      axios.get(`http://localhost:8080/api/source/${this.state.user_id}`),
      axios.get(`http://localhost:8080/api/medium/${this.state.user_id}`),
      axios.get(`http://localhost:8080/api/url/${this.state.user_id}`),
    ];
    // declare variables to handle each separate response
    let websitesState;
    let sourcesState;
    let mediaState;
    let urlsState;
    // make all requests at once
		axios.all(requests)
		.then(result => {
			console.log("success");
      console.log(result.data);
      websitesState = result[0].data;
      sourcesState = result[1].data;
      mediaState = result[2].data;
      urlsState = result[3].data;
			this.setState({
        websites: websitesState,
        sources: sourcesState,
        media: mediaState,
        urls: urlsState,
        loaded: true
      });
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
    let newFinal_url =  newOriginal_url + 
                        "?utm_source=" + newCampaign_source +
                        ( newCampaign_medium ? ("&utm_medium=" + newCampaign_medium) : '' ) + 
                        ( newCampaign_name ? ("&utm_campaign=" + newCampaign_name) : '' ) + 
                        ( newCampaign_term ? ("&utm_term=" + newCampaign_term) : '' ) + 
                        ( newCampaign_content ? ("&utm_content=" + newCampaign_content) : '' );
    axios.post('http://localhost:8080/api/url', {
      original_url: newOriginal_url,
      campaign_source: newCampaign_source,
      campaign_medium: newCampaign_medium,
      campaign_name: newCampaign_name,
      campaign_term: newCampaign_term,
      campaign_content: newCampaign_content,
      final_url: newFinal_url,
      account_id: 1,
      user_id: 1
    })
    .then((response) => {
      let newObject = response.data;
      let urlsCopy = Array.from(this.state.urls) // copy array before adding new entry
      urlsCopy.push(newObject);
      this.setState({urls: urlsCopy}) 
    })
    .catch((error) => {
      console.log(error);
    });
    alert (newFinal_url);
  }

  // this function ads a new WEBSITE to the websites database and plug the response to the state
  addNewWebsite(newWebsite) {
    axios.post('http://localhost:8080/api/website', {
      website: newWebsite,
      account_id: 1,
      user_id: 1
    })
    .then((response) => {
      let newObject = response.data;
      let websitesCopy = Array.from(this.state.websites) // copy array before adding new entry
      websitesCopy.push(newObject);
      this.setState({websites: websitesCopy}) 
    })
    .catch((error) => {
      console.log(error);
    });
  }

  // this function ads a new SOURCE to the sources database and plug the response to the state
  addNewSource(newSource) {
    axios.post('http://localhost:8080/api/source', {
      source: newSource,
      account_id: 1,
      user_id: 1
    })
    .then((response) => {
      let newObject = response.data;
      let sourcesCopy = Array.from(this.state.sources) // copy array before adding new entry
      sourcesCopy.push(newObject);
      this.setState({sources: sourcesCopy}) 
    })
    .catch((error) => {
      console.log(error);
    });
  }

  // this function ads a new MEDIUM to the media database and plug the response to the state
  addNewMedium(newMedium) {
    axios.post('http://localhost:8080/api/medium', {
      medium: newMedium,
      account_id: 1,
      user_id: 1
    })
    .then((response) => {
      let newObject = response.data;
      let mediaCopy = Array.from(this.state.media) // copy array before adding new entry
      mediaCopy.push(newObject);
      this.setState({media: mediaCopy}) 
    })
    .catch((error) => {
      console.log(error);
    });
  }


  render() {
    console.log(this.state);
    let views;
    if (Object.keys(this.state.loaded) === false) {
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
              <li className="small-12"><Link to="/url_list">URL List</Link></li>
              <li className="small-12"><Link to="/account_setup">Account Setup</Link></li>
              <li className="small-12"><Link to="/settings">Settings</Link></li>
              <li className="small-12"><Link to="/new_url">New URL</Link></li>
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
