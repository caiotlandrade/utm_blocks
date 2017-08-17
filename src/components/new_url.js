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
    // console.log(this.props);
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
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Website URL</p>
          <input  data-field="newOriginal_url"
                  type="text"
                  className="form-control"
                  placeholder="The full website URL"
                  value={this.state.newOriginal_url}
                  onChange={this.handleChange} />
          <p>Campaign Source</p>
          <input  data-field="newCampaign_source"
                  type="text"
                  className="form-control"
                  placeholder="The traffic referrer"
                  value={this.state.newCampaign_source}
                  onChange={this.handleChange} />
          <p>Campaign Medium</p>
          <input  data-field="newCampaign_medium"
                  type="text"
                  className="form-control"
                  placeholder="Marketing medium"
                  value={this.state.newCampaign_medium}
                  onChange={this.handleChange} />
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
            <button className="btn btn-primary" type="submit">Add it to the list</button>
          </span>
        </form>
      </div>
    );
  }
}

export default New_URL;