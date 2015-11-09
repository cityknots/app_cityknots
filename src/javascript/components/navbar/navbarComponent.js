import React from 'react';

var NavComponent = React.createClass({

	render: function(){
		return <nav className="navbar">
			<a href="/" className="navbar-logo">
				<img src="images/cityknots-logo.png" alt=""></img>
			</a>
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
				 				<a href="/profile.html">Account</a>
				 				<a href="">Sign Out</a>
				 			</li>
				 		</ul>
				 	</div>
				</div>
			</div>
		</nav>
	}

  

})

export default NavComponent;
