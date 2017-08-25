import React, { Component } from 'react';
import {Link} from 'react-router';
import '../App.css';

class URL_List extends Component {

    render() {
      return (
        <div className="App">
          <h2>URL list</h2>
          <div>
            <span className="">
              <button className="button" type="button"><Link to="/new_url">New URL</Link></button>
            </span>
            <URLTable   urls={this.props.urls}
                        websites={this.props.websites}
                        sources={this.props.sources}
                        media={this.props.media}
                        deleteItem = {this.props.deleteItem}
                        duplicateUrl = {this.props.duplicateUrl} />
          </div>
        </div>
      );
    }
  }

class URLTable extends React.Component {
  render() {
    let urlsArray = Array.from(this.props.urls); // copying the array coming through props
    return (
      <div>
        <h3>Table title</h3>
        <table>
          <tbody>
            <tr>
              <th>original url</th>
              <th>source</th>
              <th>medium</th>
              <th>name</th>
              <th>term</th>
              <th>content</th>
              <th>final url</th>
              <th>shortened url</th>
              <th></th>
            </tr>
            {urlsArray.map((url, i) => {
              return (
                <tr>
                  <td>{url.original_url}</td>
                  <td>{url.campaign_source}</td>
                  <td>{url.campaign_medium}</td>
                  <td>{url.campaign_name}</td>
                  <td>{url.campaign_term}</td>
                  <td>{url.campaign_content}</td>
                  <td>{url.final_url}</td>
                  <td>{url.shortened_url}</td>
                  <td>
                    <button type="button" onClick={() => { this.props.deleteItem("url", url.id, url.user_id) }}>
                    <Link to="/url_list">Delete</Link>
                    </button>
                  </td>
                  <td>
                    <button type="button" onClick={() => { this.props.duplicateUrl(
                        url.original_url, 
                        url.campaign_source, 
                        url.campaign_medium, 
                        url.campaign_name, 
                        url.campaign_term, 
                        url.campaign_content) }}>
                        <Link to="/new_url">Duplicate</Link>
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
  
  export default URL_List;