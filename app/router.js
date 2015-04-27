import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('products', function() {});

  this.resource('blogs', {path: '/help'}, function() {
    this.route('announcement');
    this.route('manual');
    this.route('news');
    this.route('tutorial');
    this.route('show', {path: '/:blog_id'});
  });

  this.resource('pages', function() {
    this.route('about', {path: '/about'});
    this.route('opportunity', {path: '/opportunity'});
    this.route('contact', {path: '/contact'});
  });

});

export default Router;
