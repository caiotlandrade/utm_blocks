import React, { Component } from 'react';
import '../App.css';

class Account_Setup extends Component {

  render() {
    return (
      <div className="App">
        <h2>Account Setup</h2>
        <NewWebsite />
        <NewSource />
        <NewMedium />
      </div>
    );
  }
}

class NewWebsite extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newWebsite: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // this monitors the change and listen to newWebsite input value
  handleChange(event) {
    this.setState({newWebsite: event.target.value});
  }

  // this triggers addNewWebsite() and empties the form
  handleSubmit(event) {
    event.preventDefault();
    // this calls the function on main component to add the new entry
    this.props.addNewWebsite(this.state.newWebsite);
    // this erases the form
    this.setState({
      newWebsite: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Common Websites</p>
          <input  type="text"
                  className="form-control"
                  placeholder="Add a new common website"
                  value={this.state.newWebsite}
                  onChange={this.handleChange} />
          <span className="input-group-btn">
            <button className="btn btn-primary" type="submit">Add a new website</button>
          </span>
        </form>
      </div>
    );
  }
}

class NewSource extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newSource: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // this monitors the change and listen to newSource input value
  handleChange(event) {
    this.setState({newSource: event.target.value});
  }

  // this triggers addNewSource() and empties the form
  handleSubmit(event) {
    event.preventDefault();
    // this calls the function on main component to add the new entry
    this.props.addNewSource(this.state.newSource);
    // this erases the form
    this.setState({
      newSource: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Default Sources</p>
          <input  type="text"
                  className="form-control"
                  placeholder="Add a new default source"
                  value={this.state.newSource}
                  onChange={this.handleChange} />
          <span className="input-group-btn">
            <button className="btn btn-primary" type="submit">Add a new source</button>
          </span>
        </form>
      </div>
    );
  }
}

class NewMedium extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newMedium: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // this monitors the change and listen to newMedium input value
  handleChange(event) {
    this.setState({newMedium: event.target.value});
  }

  // this triggers addNewMedium() and empties the form
  handleSubmit(event) {
    event.preventDefault();
    // this calls the function on main component to add the new entry
    this.props.addNewMedium(this.state.newMedium);
    // this erases the form
    this.setState({
      newMedium: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Default Media</p>
          <input  type="text"
                  className="form-control"
                  placeholder="Add a new default medium"
                  value={this.state.newMedium}
                  onChange={this.handleChange} />
          <span className="input-group-btn">
            <button className="btn btn-primary" type="submit">Add a new medium</button>
          </span>
        </form>
      </div>
    );
  }
}

export default Account_Setup;