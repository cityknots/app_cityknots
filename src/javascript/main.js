var App = require('./components/app');
var React = require('react');

//
// Activate Gallery Slider
//

var slider1 = null;
var slider2 = null;
function demo1 () {
    if (slider2 != undefined) {
        slider2.destroy();
    }
    slider1 = new lepsSlider();
}
function demo2 () {
    if (slider1 != undefined) {
        slider1.destroy();
    }
    slider2 = new lepsSlider({
        wrapper: '#second-slider',
        animation: 'slide'
    });
}
demo1();

// Inicialize main component
React.render(<App />, document.getElementById('main'));