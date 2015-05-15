import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('official', function() {
    this.route('about', {path: '/about'});
    this.route('opportunity', {path: '/opportunity'});
    this.route('products', {path: '/products'});
  });

  this.resource('blogs',function() {
    this.route('show', {path: '/:blog_id'});
  });

  this.resource('tools', function() {});

  this.resource('pages', {path: '/about'}, function() {});

  this.route('login');
  this.route('protected');

  this.route('error', {path: '/:path'});

});

export default Router;
