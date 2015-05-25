import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['comments/index'],
  body: Ember.computed.alias('controller.commentsIndex.body')
});
