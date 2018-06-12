var React = require('react');
var ReactDOM = require('react-dom');
//object destructoring syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main')


//load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();
//add css styling to the app
require('style!css!sass!applicationStyles')


ReactDOM.render(
  <Router history={hashHistory}>
  {/* the root of the app */}
    <Route path="/" component={Main}>

    </Route>
  </Router>,
  document.getElementById('app')
);
