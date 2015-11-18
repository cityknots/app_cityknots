/*
*	Module dependencies
*/
import React from 'react';
import MainComponent from './components/mainComponent';
import ListActions from './actions/listActions';
import ExperienceActions from './actions/experiencesActions';
import UserLayout from './components/user/userComponent';
import Router from 'react-router';

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var NavComponent = React.createClass({
	render: function(){
		return <div> 
		<nav className="navbar">
				<Link to="app" className="navbar-logo">
					<img src="images/cityknots-logo.png" alt=""></img>
				</Link>
				
			<div className="navbar-search">
				<i className="fa fa-search"></i>
				<input className="input" type="text" placeholder="Search (try toronto, architecture, red bridges, etc)"></input>
			</div>
			<div className="nav-options">
				<ul className="search-options">
					<li>
						<a href="" className="active">all</a>
						<a href="">experiences</a>
						<a href="">lists</a>
					</li>
				 </ul>
				 <div className="dropdown">
					<div className="dropdown-menu">
				 		<a href="" className="menu-button"><i className="font-hamburger"></i></a>
				 		<ul>
				 			<li>
				 				<a href="">My items</a>
				 				<a> <Link to="user">Account</Link> </a>
				 				<a href="">Sign Out</a>
				 				
				 			</li>
				 		</ul>
				 	</div>
				</div>
			</div>
		</nav>
		<RouteHandler />
		</div>
	}
})

var routes = (
  <Route name="app" path="/" handler={NavComponent}>
    <Route name="user" handler={UserLayout}/>
    <DefaultRoute handler={MainComponent}/>
  </Route>
);

// let routes = <Route handler={MainComponent}>
// 				<Route path="user" handler={UserLayout}/>
// 			</Route>

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});

// Router.run(routes, Router.HistoryLocation, (Root) => {
// 	React.render(<Root />, document.getElementById('app'));
// })
