/*
*	Module dependencies
*/
import React from 'react';
import Manager from './manager/index';
import Experiences from './models/ExperienceModel';
import MainComponent from './components/mainComponent';
import ListsStore from './stores/listStore';
import ExperienceStore from './stores/experienceStore';



// Manager();
// ListsStore.fetchList();

// Experiences.bind('refresh',function(){
React.render(
	<MainComponent />, document.getElementById('app')
)





