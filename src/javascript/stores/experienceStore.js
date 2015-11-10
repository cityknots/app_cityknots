import Reflux from 'reflux';
import $ from 'jquery';
import ExperienceActions from '../actions/experiencesActions';
// import ListActions from '../actions/listActions';
import Experience from '../models/ExperienceModel';

var ExperienceStore = Reflux.createStore({
    listenables: [ExperienceActions],
    experiences: [],
    sourceUrl: 'https://api.parse.com/1/classes/experience',

    init: function() {
        this.fetchExperience();
    },

    fetchExperience: function() {
      $.ajax({
        beforeSend: function(request) {
            request.setRequestHeader("X-Parse-Application-Id", 'Yl7PNaBFgL8ETlknO5zcr0Yk94BA0wlIPpmLBjVL');
            request.setRequestHeader("X-Parse-REST-API-Key", 'UxDVcEUOQA9K7wfGXjjt4bLuWcNXYcfmG4B6oRW2');
          },
          url: this.sourceUrl,
          type: 'GET',
          context: this,
          success: function(data) {
              console.log('Llegaron experiences');
              Experience.refresh(data.results);
              let arr = [];
              let elements = [];
              for (let i = 0; i < data.results.length; i++) {
                let arrImgs = data.results[i].expImages.split(",");
                data.results[i].images = arrImgs;
                elements.push(data.results[i]);
                if (i % 9 == 0 && i != 0) {
                  let newObj = {
                    tittle: " Experiences",
                    elements: elements,
                  }
                  arr.push(newObj);
                  elements = [];
                };
              };
              this.experiences = arr;
              this.trigger(this.experiences);
              // console.log(Experience.all());
          }
      });
      // ListActions.refreshListData();
    }
});

export default ExperienceStore;