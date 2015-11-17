import React from 'react';
import Modal from '../modal/modalComponent';

var ExperienceItem = React.createClass({
  makeAlert: function(){
    alert("Hi bas")
  },
	render: function(){
		return <div className="slider-item experience">
                  <div className="thumbnail">
                    <div className="details">
                      <a href=""><i className="font-heartfilled"></i></a>
                    </div>
                    <div className="overlay">
                      <div className="overlay-content">
                        <div className="options">
                          <button onClick={this.makeAlert} className="btn"><i className="font-eyes"></i> explore</button>
                          <button className="btn"><i className="font-add"></i> add to list</button>
                        </div>
                      </div>
                    </div>
                    <img src={"https://s3.amazonaws.com/cityknots.com/images/asset_"+ this.props.experience.images[0] +".jpg"} alt=""></img>
                  </div>
                  <div className="caption">
                    <span className="name">{this.props.experience.expTitle}</span>
                    <small className="description">{this.props.experience.expCity +', '+ this.props.experience.expCountry}</small>
                  </div>
                </div>
	}
});

export default ExperienceItem;

          