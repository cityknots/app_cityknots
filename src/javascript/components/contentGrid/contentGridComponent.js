import React from 'react';
import Reflux from 'reflux';
import BucketList from './listGrid';
import ExperienceGrid from './experienceGrid';
import Lists from '../../models/listModel';
import ListStore from '../../stores/listStore';
import ExperienceStore from '../../stores/experienceStore';

var ContentGrid = React.createClass({
	mixins: [
		Reflux.connect(ListStore, 'BucketListElements'),
		Reflux.connect(ExperienceStore, 'ExperienceElements')
	],

	render: function(){
		// console.log('Content Grid --->');
		// console.log(this.state.BucketListElements);
		return <div className="container">
			<BucketList gridElements={this.state.BucketListElements}/>
			<ExperienceGrid gridElements={this.state.ExperienceElements}/>
		</div>
	}
});

export default ContentGrid;