import Lists from '../models/listModel';
import Experiences from '../models/ExperienceModel';
import $ from 'jquery';

function init(){
	fecthLists();
	fectExperiences();
}

function fecthLists(){
	var sourceUrl = 'https://api.parse.com/1/classes/list';
	 $.ajax({
        beforeSend: function(request) {
            request.setRequestHeader("X-Parse-Application-Id", 'Yl7PNaBFgL8ETlknO5zcr0Yk94BA0wlIPpmLBjVL');
            request.setRequestHeader("X-Parse-REST-API-Key", 'UxDVcEUOQA9K7wfGXjjt4bLuWcNXYcfmG4B6oRW2');
          },
          url: sourceUrl,
          type: 'GET',
          success: function(data) {
              console.log('Query lists success');
              for (let i = 0; i < data.results.length; i++) {
              	let string = data.results[i].listExperiences;
              	let arr = data.results[i].listExperiences.split(", ");
              	data.results[i].experiences = arr;
              };
              Lists.refresh(data.results);
              // console.log(Lists.all());
          }
      });
}

function fectExperiences(){
	var sourceUrl = 'https://api.parse.com/1/classes/experience';
	 $.ajax({
        beforeSend: function(request) {
            request.setRequestHeader("X-Parse-Application-Id", 'Yl7PNaBFgL8ETlknO5zcr0Yk94BA0wlIPpmLBjVL');
            request.setRequestHeader("X-Parse-REST-API-Key", 'UxDVcEUOQA9K7wfGXjjt4bLuWcNXYcfmG4B6oRW2');
          },
          url: sourceUrl,
          type: 'GET',
          success: function(data) {
              console.log('Query experience success');
              Experiences.refresh(data.results);
              // console.log(Experiences.all());
          }
      });
}

export default init;