import React from 'react';
import BucketList from './listGrid';
import Lists from '../../models/listModel';

Lists.bind("refresh", function(){
	
	ContentGrid.refreshData;
})

var ContentGrid = React.createClass({
	getInitialState: function(){
		return {
			BucketListElements: {
				tittle:'Most Recomended Bucket Lists', 
				elements: [],
			}
		}
	},
	refreshData: function(){
		console.log('refresh');
		this.setState({
			BucketListElements: {
				tittle:'Most Recomended Bucket Lists', 
				elements: Lists.all(),
			}
		})
	},
	render: function(){
		return <div className="container">
			<BucketList gridElements={this.state.BucketListElements}/>
		</div>
	}
});

export default ContentGrid;