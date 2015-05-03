import Ember from 'ember';
//import moment from 'moment';

var formatdate = function(date) {
  //if(!format) format = ;
  //return moment(date).format("YYYY MMMM Do, h:mm:ss a");
};

export default Ember.HTMLBars.makeBoundHelper(formatdate);
