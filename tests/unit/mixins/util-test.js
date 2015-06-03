import Ember from 'ember';
import UtilMixin from '../../../mixins/util';
import { module, test } from 'qunit';

module('UtilMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var UtilObject = Ember.Object.extend(UtilMixin);
  var subject = UtilObject.create();
  assert.ok(subject);
});
