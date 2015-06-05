import Ember from 'ember';
/*global flipCounter */

export default Ember.View.extend({
  initFlipCounter: function () {
    //forntend counter
    if (this.$("div#joinedPeople").length > 0) {
      this.makeCounter(this.flipCounter());
    }
  }.on('didInsertElement'),

  flipCounter: function () {
    var myCounter = new flipCounter("counter", {pace: 800, auto: false});
    return myCounter;
  },

  makeCounter: function (myCounter) {
    var _this = this;
    var url = 'http://localhost/api/v1/onecoiners';
    Ember.$.getJSON(url).then(function (data) {
      myCounter.setValue(data.counter);

      _this.clock().on('finish.countdown', function () {
        Ember.run(function () {
          _this.makeCounter(myCounter);
          _this.clock();
        });
      });
    });
  },

  // Turn on Bootstrap
  //$('[data-toggle="tooltip"]').tooltip();

  // 60s from now!
  get15dayFromNow: function () {
    return new Date(new Date().valueOf() + 60 * 1000);
  },

  clock: function () {
    var _this = this;
    return this.$('#clock').countdown(this.get15dayFromNow(), function (event) {
      _this.$(this).html(event.strftime('%H:%M:%S'));
    });
  },

  actions: {
    refresh: function () {
      this.clock().countdown(this.get15dayFromNow());
    },

    pause: function () {
      this.clock().countdown('pause');
    },

    resume: function () {
      this.clock().countdown('resume');
    }
  }

});
