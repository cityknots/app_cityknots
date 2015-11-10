import React from 'react';

var ListBucket = React.createClass({
	render: function(){
		return <div className="slider-item bucket">
            <div className="thumbnail">
              <div className="details">
                <i className="font-compass"></i>
                {this.props.item.experiences.length + ' experiences'}
              </div>
              <div className="overlay">
                <div className="overlay-content">
                  <p>{this.props.item.listDescription}</p>
                  <ul>
                    <li>Flatiron Building, 175 Fifth Ave</li>
                    <li>Goelet Building</li>
                    <li>The Atrium, 160 Bleeker Street</li>
                    ...and 3 more
                  </ul>
                  <div className="options">
                    <button className="btn" id="open-large-modal"><i className="font-eyes"></i> explore</button>
                    <button className="btn" id="open-small-modal"><i className="font-add"></i> add to list</button>
                  </div>
                </div>
              </div>
              <img src="./images/bucket-img1.png" alt=""></img>
            </div>
            <div className="caption">
              <span className="name">{this.props.item.listTitle}</span>
              <small className="description">{this.props.item.listCity + ', ' + this.props.item.listCountry}</small>
            </div>
          </div>
	}
});

export default ListBucket;

          