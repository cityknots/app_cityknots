import React from 'react';
import Slider from './slider/sliderComponent';
import NavBar from './navbar/navbarComponent';
import ModalComponent from './modal/modalComponent';
import ContentGrid from './ContentGrid/ContentGridComponent';

var MainComponent = React.createClass({
	render: function(){
		return <div>
			<section id="mainContent">
				<Slider />
				<ContentGrid />
			</section>
			<section id="modalsContainer">
				<ModalComponent />
			</section>
		</div>
	}
});

export default MainComponent;