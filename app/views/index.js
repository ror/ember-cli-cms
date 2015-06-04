import Ember from 'ember';
//import Util from './mixins/util';

/*global flipCounter */

export default Ember.View.extend({
  //// fixme
  // 1. GET http://localhost/img/frontend/digits.png 404 (Not Found)
  flipCounter: function () {
    //forntend counter
    if (this.$("div#joinedPeople").length > 0) {
      var myCounter = new flipCounter("counter", {pace: 800, auto: false});
      this.$("div#joinedPeople").addClass("hello world");
      this.makeCounter(myCounter);
    }
  }.on('didInsertElement'),

  //
  makeCounter: function (myCounter) {
    var _this = this;
    //var counterValue = myCounter.getValue();

    this.get("controller").store.find("onecoiner", 1).then(
      function (onecoiner) {
        console.log(onecoiner._data.counter);
        myCounter.setValue(onecoiner._data.counter);
        setTimeout(function () {
          _this.makeCounter(myCounter);
        }, 10000);
      },
      null
    );
     //fixme
     //XMLHttpRequest cannot load https://www.onecoin.eu/tech/other/getJoinedPeople?value=0. No 'Access-Control-Allow-Origin' header
    //Ember.$.get(
    //  'https://www.onecoin.eu/tech/other/getJoinedPeople',
    //  //{value: counterValue},
    //  function (response) {
    //    console.log(response);
    //    myCounter.setValue(Ember.$.trim(response));
    //    setTimeout(function () {
    //
    //      _this.makeCounter(myCounter);
    //    }, 10000);
    //  }, "html");

    //request('http://www.google.com', function (error, response, body) {
    //  if (!error && response.statusCode === 200) {
    //
    //    console.log(myCounter); // Show the HTML for the Google homepage.
    //
    //    console.log(body); // Show the HTML for the Google homepage.
    //  }
    //});
  }


});
