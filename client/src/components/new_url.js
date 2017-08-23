import React, { Component } from 'react';
import '../App.css';

class New_URL extends Component {
  constructor (props) {
    super (props)
    this.state = {
      newOriginal_url: '',
      newCampaign_source: '',
      newCampaign_medium: '',
      newCampaign_name: '',
      newCampaign_term: '',
      newCampaign_content: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // this monitors the change and listen to each input value
  // the function uses using 'data-field' parameter to pass the variable
  handleChange(event) {
    let field = event.target.dataset.field;
    let value = event.target.value;
    this.setState({
      [field]: value
    })
  }

	// this triggers addNewURL() and empties the form
  handleSubmit(event) {
		event.preventDefault();
		// this calls the function on main component to add the new entry
    this.props.addNewURL(  this.state.newOriginal_url, 
                            this.state.newCampaign_source, 
                            this.state.newCampaign_medium, 
                            this.state.newCampaign_name, 
                            this.state.newCampaign_term, 
                            this.state.newCampaign_content); 
    // this erases the form
		this.setState({ newOriginal_url: '',
                    newCampaign_source: '',
                    newCampaign_medium: '',
                    newCampaign_name: '',
                    newCampaign_term: '',
                    newCampaign_content: ''});
  }

  render() {
    let websitesArray = this.props.websites;
    let sourcesArray = this.props.sources;
    let mediaArray = this.props.media;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <p>Website URL</p>
          <label>
            <select   data-field="newOriginal_url" 
                      className="form-control" 
                      value={this.state.newOriginal_url}
                      onChange={this.handleChange} 
                      required>
              <option value="">
                  Select website
              </option>
            {websitesArray.map((websiteObject, i) => {
              return (
                <option name={websiteObject.website} value={websiteObject.website}>
                  {websiteObject.website}
                </option>
              )
            })}
            </select>
          </label>

          <p>Campaign Source</p>
          <label>
            <select   data-field="newCampaign_source" 
                      className="form-control" 
                      value={this.state.newCampaign_source}
                      onChange={this.handleChange} 
                      required>
              <option value="">
                  Select source
              </option>
            {sourcesArray.map((sourceObject, i) => {
              return (
                <option name={sourceObject.source} value={sourceObject.source}>
                  {sourceObject.source}
                </option>
              )
            })}
            </select>
          </label>

          <p>Campaign Medium</p>
          <label>
            <select   data-field="newCampaign_medium" 
                      className="form-control" 
                      value={this.state.newCampaign_medium}
                      onChange={this.handleChange} 
                      required>
              <option value="">
                  Select medium
              </option>
            {mediaArray.map((mediumObject, i) => {
              return (
                <option name={mediumObject.medium} value={mediumObject.medium}>
                  {mediumObject.medium}
                </option>
              )
            })}
            </select>
          </label>

          <p>Campaign Name</p>
          <input  data-field="newCampaign_name"
                  type="text"
                  className="form-control"
                  placeholder="Product, promo code, or slogan"
                  value={this.state.newCampaign_name}
                  onChange={this.handleChange} />

          <p>Campaign Term</p>
          <input  data-field="newCampaign_term"
                  type="text"
                  className="form-control"
                  placeholder="Identify the paid keywords"
                  value={this.state.newCampaign_term}
                  onChange={this.handleChange} />

          <p>Campaign Content</p>
          <input  data-field="newCampaign_content"
                  type="text"
                  className="form-control"
                  placeholder="Use to differentiate ad versions"
                  value={this.state.newCampaign_content}
                  onChange={this.handleChange} />
          
          <span className="input-group-btn">
            <button className="button" type="submit">Add it to the list</button>
          </span>
        </form>
      </div>
    );
  }
}

export default New_URL;