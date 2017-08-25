import React, { Component } from 'react';
import {Link} from 'react-router';
import '../App.css';

class Account_Setup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newWebsite: '',
      newSource: '',
      newMedium: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // this monitors the change and listen to newWebsite input value
  handleChange(event) {
    let field = event.target.dataset.field;
    let value = event.target.value;
    this.setState({
      [field]: value
    })
  }

  // this triggers addNewWebsite() and empties the form
  handleSubmit(event) {
    event.preventDefault();
    // this calls the function on main component to add the new entry
    console.log(event.target.dataset.form);
    if (event.target.dataset.form === "newWebsite") {
      this.props.addNewWebsite(this.state.newWebsite);
    } else if (event.target.dataset.form === "newSource") {
      this.props.addNewSource(this.state.newSource);
    } else if (event.target.dataset.form === "newMedium") {
      this.props.addNewMedium(this.state.newMedium);
    }
    // this erases the form
    this.setState({
      [event.target.dataset.form]: ''
    });
  }

  render() {
    return (

<div>
      <div className="small-12 cell page_title">
        <h2>Account Setup</h2>
      </div>
      <div className="grid-x grid-margin-x account-category">
        <div className="small-12 medium-8 cell">
          <NewWebsite handleChange={this.handleChange} handleSubmit={this.handleSubmit} newWebsite={this.state.newWebsite} />
          <WebsiteList websites={this.props.websites} deleteItem = {this.props.deleteItem}/>
        </div>
        <div className="small-12 medium-4 cell accountSetup-description">
          <p>List here all URLs of your digital assets, for instance, your main website, the blog and landing pages domain.</p>
        </div>
      </div>
      <div className="grid-x grid-margin-x">
        <div className="small-12 medium-8 cell">
          <NewSource handleChange={this.handleChange} handleSubmit={this.handleSubmit} newSource={this.state.newSource} />
          <SourceList sources={this.props.sources} deleteItem = {this.props.deleteItem}/>
        </div>
        <div className="small-12 medium-4 cell accountSetup-description">
          <p>Identify the advertiser, site, publication, etc. that is sending traffic to your property, for example: google, newsletter4, billboard.</p>
        </div>
      </div>
      <div className="grid-x grid-margin-x">
        <div className="small-12 medium-8 cell">
          <NewMedium handleChange={this.handleChange} handleSubmit={this.handleSubmit} newMedium={this.state.newMedium} />
          <MediumList media={this.props.media} deleteItem = {this.props.deleteItem}/>
        </div>
        <div className="small-12 medium-4 cell accountSetup-description">
          <p>The advertising or marketing medium, for example: cpc, banner, email newsletter.</p>
        </div>
      </div>
      </div>


    );
  }
}


class NewWebsite extends Component {

  render() {
    return (
      <div>
        <form data-form="newWebsite" onSubmit={this.props.handleSubmit}>
          <h3>Common Websites</h3>
            <input  data-field="newWebsite"
                    type="text"
                    className=""
                    placeholder="Add a new common website"
                    value={this.props.newWebsite}
                    onChange={this.props.handleChange} />
            <button className="button float-right" type="submit">
              Add a new website
            </button>
        </form>
      </div>
    );
  }
}

class NewSource extends Component {

  render() {
    return (
      <div>
        <form data-form="newSource" onSubmit={this.props.handleSubmit}>
          <h3>Default Sources</h3>
          <input  data-field="newSource"
                  type="text"
                  className="form-control"
                  placeholder="Add a new default source"
                  value={this.props.newSource}
                  onChange={this.props.handleChange} /> 
            <button className="button float-right" type="submit">
              Add a new source
            </button>
        </form>
      </div>
    );
  }
}

class NewMedium extends Component {

  render() {
    return (
      <div>
        <form data-form="newMedium" onSubmit={this.props.handleSubmit}>
          <h3>Default Media</h3>
          <input  data-field="newMedium"
                  type="text"
                  className="form-control"
                  placeholder="Add a new default medium"
                  value={this.props.newMedium}
                  onChange={this.props.handleChange} />
          <button className="button float-right" type="submit">
            Add a new medium
          </button>
        </form>
      </div>
    );
  }
}

class WebsiteList extends React.Component {
  render() {
    let websitesArray = Array.from(this.props.websites); // copying the array coming through props
    let websitesTable = websitesArray.map((website, i) => {
      return (
        <tr>
          <td className="accountSetup-item_left">{website.website}</td>
          <td className="accountSetup-item_right">
            <button type="button float-right" onClick={() => { this.props.deleteItem("website", website.id, website.user_id) }}>
              <Link to="/account_setup">Delete</Link>
            </button>
          </td>
        </tr>
      )
    });

    return (
      <div>
        <table className="accountSetup-table">
          <tbody>
            {websitesTable}
          </tbody>
        </table>
      </div>
    )
  }
}

class SourceList extends React.Component {
  render() {
    let sourcesArray = Array.from(this.props.sources); // copying the array coming through props
    let sourcesTable = sourcesArray.map((source, i) => {
      return (
        <tr>
          <td className="accountSetup-item_left">{source.source}</td>
          <td className="accountSetup-item_right">
            <button type="button float-right" onClick={() => { this.props.deleteItem("source", source.id, source.user_id) }}>
              <Link to="/account_setup">Delete</Link>
            </button>
          </td>
        </tr>
      )
    })
    return (
      <div>
        <table className="accountSetup-table">
          <tbody>
            {sourcesTable}
          </tbody>
        </table>
      </div>
    )
  }
}

class MediumList extends React.Component {
  render() {
    let mediaArray = Array.from(this.props.media); // copying the array coming through props
    let mediaTable = mediaArray.map((medium, i) => {
      return (
        <tr>
          <td className="accountSetup-item_left">{medium.medium}</td>
          <td className="accountSetup-item_right">
            <button type="button float-right" onClick={() => { this.props.deleteItem("medium", medium.id, medium.user_id) }}>
              <Link to="/account_setup">Delete</Link>
            </button>
          </td>
        </tr>
      )
    })
    return (
      <div>
        <table className="accountSetup-table">
          <tbody>
            {mediaTable}
          </tbody>
        </table>
      </div>
    )
  }
}


export default Account_Setup;