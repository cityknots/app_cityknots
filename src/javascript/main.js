/*
*	Module dependencies
*/
import React from 'react';
import Manager from './manager/index';
import Experiences from './models/ExperienceModel';
import MainComponent from './components/mainComponent';

Manager();

Experiences.bind('refresh',function(){
	React.render(
		<MainComponent />, document.getElementById('app')
	)
})





