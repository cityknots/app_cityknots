import React from 'react';
import Slider from './slider/sliderComponent';
import NavBar from './navbar/navbarComponent';
import ContentGrid from './ContentGrid/ContentGridComponent';

var MainComponent = React.createClass({
	render: function(){
		return <div>
			<NavBar />
			<section id="mainContent">
				<Slider />
				<ContentGrid />
			</section>
		</div>
	}
});

export default MainComponent;