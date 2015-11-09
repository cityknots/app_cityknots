import React from 'react';
import Reflux from 'reflux';
import BucketList from './listGrid';
import Lists from '../../models/listModel';
import ListStore from '../../stores/listStore';

var ContentGrid = React.createClass({
	mixins: [Reflux.connect(ListStore, 'BucketListElements')],

	render: function(){
		// console.log('Content Grid --->');
		// console.log(this.state.BucketListElements);
		return <div className="container">
			<BucketList gridElements={this.state.BucketListElements}/>
		</div>
	}
});

export default ContentGrid;