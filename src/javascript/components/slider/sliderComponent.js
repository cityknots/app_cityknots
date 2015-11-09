import React from 'react';

var SliderHeader = React.createClass({
	componentDidMount: function() {
		var slider = new lepsSlider({
			// animation: "slide",
			direction: 'ltr',
			autoSlide: true,
			animationSpeed: 5,
			pauseOnHover: true,
			keyboard: true, 
		})
	},
	
	render: function() {
		return <div className="leps-slider" id="leps-slider">
				<div className="slide-item slide-1">
					<div className="slide-caption">
						<h1>Here goes a title #1</h1>
						<p>Here goes a short description</p>
					</div>
				</div>
				<div className="slide-item slide-2">
					<div className="slide-caption">
						<h1>Here goes a title #2</h1>
						<p>Here goes a line to continue below.</p>
					</div>
				</div>
				<div className="slide-item slide-3">
					<div className="slide-caption">
						<h1>Here goes a title #3</h1>
						<p>Here goes a line to continue below.</p>
					</div>
				</div>
			</div>
	}	

})

export default SliderHeader;