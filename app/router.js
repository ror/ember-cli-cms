import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('pages', function() {
    this.route('about', {path: '/about'});
    this.route('opportunity', {path: '/opportunity'});
    this.route('contact', {path: '/contact'});
    this.route('products', {path: '/products'});
  });

  this.resource('blogs',function() {
    this.route('show', {path: '/:blog_id'});
  });

  this.resource('tools', function() {});

  this.route('error', {path: '/:path'});
});

export default Router;
