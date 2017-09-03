import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, Link, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
// import {syncHistoryWithStore} from 'react-router-redux';
import createBrowserHistory from '../node_modules/history/createBrowserHistory'
import configureStore from './store/index';
import TodoApp from './containers/TodoApp' //containers 用来渲染

const store = configureStore();



ReactDOM.render(
    <Provider store={store}>
        <Router history={createBrowserHistory()}>
            <div>
                {/*<Redirect from="/" to="/campaign"/>*/}
                <Route path="/" component={TodoApp}></Route>
                <Route path="/login" component={TodoApp}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
)


// ReactDOM.render(
//     <Provider store={store}>
//         <Router history={createBrowserHistory()}>
//             <div>
//                 <ul>
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/about">About</Link></li>
//                     <li><Link to="/topics">Topics</Link></li>
//                 </ul>
//
//                 <hr/>
//
//                 <Route exact path="/" component={TodoApp}/>
//                 <Route path="/about" component={TodoApp}/>
//                 <Route path="/topics" component={TodoApp}/>
//             </div>
//         </Router>
//     </Provider>,
//     document.getElementById('root')
// )
//
