import React, { Component } from 'react';
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
      <div className="small-12 cell">
        <h2>Account Setup</h2>
      </div>
      <div className="grid-x grid-margin-x">
        <div className="small-12 medium-6 cell">
          <NewWebsite handleChange={this.handleChange} handleSubmit={this.handleSubmit} newWebsite={this.state.newWebsite} />
          <WebsiteList websites={this.props.websites} deleteItem = {this.props.deleteItem}/>
        </div>
        <div className="small-12 medium-6 cell">
          <p>something about this type of entry</p>
        </div>
      </div>
      <div className="grid-x grid-margin-x">
        <div className="small-12 medium-6 cell">
          <NewSource handleChange={this.handleChange} handleSubmit={this.handleSubmit} newSource={this.state.newSource} />
          <SourceList sources={this.props.sources} deleteItem = {this.props.deleteItem}/>
        </div>
        <div className="small-12 medium-6 cell">
          <p>something about this type of entry</p>
        </div>
      </div>
      <div className="grid-x grid-margin-x">
        <div className="small-12 medium-6 cell">
          <NewMedium handleChange={this.handleChange} handleSubmit={this.handleSubmit} newMedium={this.state.newMedium} />
          <MediumList media={this.props.media} deleteItem = {this.props.deleteItem}/>
        </div>
        <div className="small-12 medium-6 cell">
          <p>something about this type of entry</p>
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
          <p>Common Websites</p>
          <input  data-field="newWebsite"
                  type="text"
                  className="form-control"
                  placeholder="Add a new common website"
                  value={this.props.newWebsite}
                  onChange={this.props.handleChange} />
          <span className="input-group-btn">
            <button className="button" type="submit">
              Add a new website
            </button>
          </span>
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
          <p>Default Sources</p>
          <input  data-field="newSource"
                  type="text"
                  className="form-control"
                  placeholder="Add a new default source"
                  value={this.props.newSource}
                  onChange={this.props.handleChange} />
          <span className="input-group-btn">
            <button className="button" type="submit">
              Add a new source
            </button>
          </span>
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
          <p>Default Media</p>
          <input  data-field="newMedium"
                  type="text"
                  className="form-control"
                  placeholder="Add a new default medium"
                  value={this.props.newMedium}
                  onChange={this.props.handleChange} />
          <span className="input-group-btn">
            <button className="button" type="submit">
              Add a new medium
            </button>
          </span>
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
          <td>{website.website}</td>
          <td>
            <button type="button" onClick={() => { this.props.deleteItem("website", website.id, website.user_id) }}>
              Delete
            </button>
          </td>
        </tr>
      )
    });

    return (
      <div>
        <table>
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
          <td>{source.source}</td>
          <td>
            <button type="button" onClick={() => { this.props.deleteItem("source", source.id, source.user_id) }}>
              Delete
            </button>
          </td>
        </tr>
      )
    })
    return (
      <div>
        <table>
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
          <td>{medium.medium}</td>
          <td>
            <button type="button" onClick={() => { this.props.deleteItem("medium", medium.id, medium.user_id) }}>
              Delete
            </button>
          </td>
        </tr>
      )
    })
    return (
      <div>
        <table>
          <tbody>
            {mediaTable}
          </tbody>
        </table>
      </div>
    )
  }
}


export default Account_Setup;