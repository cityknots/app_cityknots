import Reflux from 'reflux';
import $ from 'jquery';
import ListActions from '../actions/ListActions';
import Lists from '../models/listModel';
// import Experience from '../models/ExperienceModel';

var ListStore = Reflux.createStore({
    listenables: [ListActions],
    bucketsLists: [],
    sourceUrl: 'https://api.parse.com/1/classes/list',

    init: function() {
        console.log(this.listenables);
        this.fetchList();
    },

    fetchList: function() {
      $.ajax({
        beforeSend: function(request) {
            request.setRequestHeader("X-Parse-Application-Id", 'Yl7PNaBFgL8ETlknO5zcr0Yk94BA0wlIPpmLBjVL');
            request.setRequestHeader("X-Parse-REST-API-Key", 'UxDVcEUOQA9K7wfGXjjt4bLuWcNXYcfmG4B6oRW2');
          },
          url: this.sourceUrl,
          type: 'GET',
          context: this,
          success: function(data) {
              for (let i = 0; i < data.results.length; i++) {
                let arr = data.results[i].listExperiences.split(", ");
                data.results[i].experiences = arr;
              };
              Lists.refresh(data.results);
              console.log("success lists")
              this.bucketsLists = [{
                  tittle:'Most Recomended Bucket Lists', 
                  elements: data.results,
                }];
              this.trigger(this.bucketsLists);
          }
      });
    },

    printAll: function() {
      console.log('hi all')
    }

    // onRefreshListData: function(){
    //   alert('hi');
    //   console.log('llego refresh');
    //   // console.log("Todas las experiences");
    //   // console.log(Experience.all());
    //   // this.bucketsLists.map(function(grid){
    //   //   grid.elements.map(function(bucket){
    //   //     for (var i = 0; i < bucket.experiences.length; i++) {
    //   //       let experience = Experience.findByAttribute('ExpId',bucket.experiences[i]);
    //   //       bucket.objExperience.push(experience);
    //   //     };
    //   //   })
    //   // })
    //   // this.trigger(this.bucketsLists);
    // }
});

export default ListStore;