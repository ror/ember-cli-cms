import Ember from 'ember';
// /*global flipCounter */

export default Ember.View.extend({
  //// fixme
  //// 1. GET http://localhost/img/frontend/digits.png 404 (Not Found)
  //flipCounter: function () {
  //  //forntend counter
  //  if (Ember.$("div#joinedPeople").length > 0) {
  //    var myCounter = new flipCounter("counter", {pace: 800, auto: false});
  //
  //    this.makeCounter(myCounter);
  //  }
  //}.on('didInsertElement'),
  //
  //makeCounter: function (myCounter) {
  //  var _this = this;
  //  var counterValue = myCounter.getValue();
  //
  //  // fixme
  //  // XMLHttpRequest cannot load https://www.onecoin.eu/tech/other/getJoinedPeople?value=0. No 'Access-Control-Allow-Origin' header
  //  Ember.$.post('https://www.onecoin.eu/tech/other/getJoinedPeople', {value: counterValue}, function (response) {
  //    myCounter.setValue(Ember.$.trim(response));
  //    setTimeout(function () {
  //      _this.makeCounter(myCounter);
  //    }, 10000);
  //  });
  //}

});
