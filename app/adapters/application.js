import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
//export default DS.FixtureAdapter.extend({
  namespace: 'api/v1',
  host: 'http://localhost:3000'
});
