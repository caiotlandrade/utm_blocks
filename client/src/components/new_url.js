import React, { Component } from 'react';
import {Link} from 'react-router';
import '../App.css';

class New_URL extends Component {

  render() {
    let websitesArray = this.props.websites;
    let sourcesArray = this.props.sources;
    let mediaArray = this.props.media;
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>

          <p>Website URL</p>
          <label>
            <select   data-field="newOriginal_url" 
                      className="form-control" 
                      value={this.props.newOriginal_url}
                      onChange={this.props.handleChange} 
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
                      value={this.props.newCampaign_source}
                      onChange={this.props.handleChange} 
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
                      value={this.props.newCampaign_medium}
                      onChange={this.props.handleChange} 
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
                  value={this.props.newCampaign_name}
                  onChange={this.props.handleChange} />

          <p>Campaign Term</p>
          <input  data-field="newCampaign_term"
                  type="text"
                  className="form-control"
                  placeholder="Identify the paid keywords"
                  value={this.props.newCampaign_term}
                  onChange={this.props.handleChange} />

          <p>Campaign Content</p>
          <input  data-field="newCampaign_content"
                  type="text"
                  className="form-control"
                  placeholder="Use to differentiate ad versions"
                  value={this.props.newCampaign_content}
                  onChange={this.props.handleChange} />
          
          <span className="">
            <button className="button" type="submit">Add new URL</button>
          </span>
        </form>
      </div>
    );
  }
}

export default New_URL;