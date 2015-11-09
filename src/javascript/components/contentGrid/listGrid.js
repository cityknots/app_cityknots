import React from 'react';
import Lists from '../../models/listModel';
import ListBucketItem from '../items/listBucketItem';

var BucketList = React.createClass({
	render: function(){
		if (this.props.gridElements.elements.length > 0){
			return <div>
				{
				this.props.gridElements.elements.map(function (element) {
					return <div> 
							<h3>{element.tittle}</h3>
							<div className="slider">
								<div className="slider-controls">
									<button className="slider-control left"><i className="fa fa-chevron-left"></i></button>
									<button className="slider-control right"><i className="fa fa-chevron-right"></i></button>
								</div>

								<div className="slider-inner">
									<div className="slider-items">
										{
											element.elements.map(function(bucket){
												return <div> Hi</div>
											})
										}
									</div>
								</div>
							</div>
						</div>
				})
			}
		</div>
		}
		else {
			 return (<p>No hay elementos</p>);
		}
	}
});

export default BucketList;