import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App_Header_Nav from './App_Header_Nav';
import URL_List from './components/url_list';
import Account_Setup from './components/account_setup';
import Settings from './components/settings';
import New_URL from './components/new_url';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(<Router history={browserHistory}>
                    <Route path="/" component={App_Header_Nav}>
                        <IndexRoute component={URL_List} />
                        <Route path="url_list" component={URL_List} />
                        <Route path="account_setup" component={Account_Setup} />
                        <Route path="settings" component={Settings} />
                        <Route path="new_url" component={New_URL} />
                    </Route>
                </Router> , document.getElementById('root'));

registerServiceWorker();