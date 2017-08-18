import React, { Component } from 'react';
import {Link} from 'react-router';
import '../App.css';

class URL_List extends Component {

    render() {
      return (
        <div className="App">
          <h2>URL list</h2>
          <div>
            <div><Link to="/new_url"> New_URL </Link></div>
            <URLTable   urls={this.props.urls}
                        websites={this.props.websites}
                        sources={this.props.sources}
                        media={this.props.media} />
          </div>
        </div>
      );
    }
  }

class URLTable extends React.Component {
  render() {
    let urlsArray = this.props.urls; // copying the array coming through props
    return (
      <div>
        <h3>Table title</h3>
        <table>
          <tbody>
            <tr>
              <th></th>
              <th>original url</th>
              <th>source</th>
              <th>medium</th>
              <th>name</th>
              <th>term</th>
              <th>content</th>
              <th>final url</th>
              <th>shortened url</th>
            </tr>
            {urlsArray.map((url, i) => {
              return (
                <tr>
                  <td>
                    <input  type="checkbox"
                            data-key={url.key}
                            data-created_at={url.created_at}
                            data-updated_at={url.updated_at}
                            data-account_key={url.account_key}
                            data-user_key={url.user_key}
                            onChange={() => { this.props.changeCheckBox(url.i) }} />
                  </td>
                  <td>{url.original_url}</td>
                  <td>{url.campaign_source}</td>
                  <td>{url.campaign_medium}</td>
                  <td>{url.campaign_name}</td>
                  <td>{url.campaign_term}</td>
                  <td>{url.campaign_content}</td>
                  <td>{url.final_url}</td>
                  <td>{url.shortened_url}</td>
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