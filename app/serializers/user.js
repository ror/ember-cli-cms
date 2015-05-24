import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractSingle: function (store, type, payload, id) {
    var user = {};

    user.id = payload.id;
    user.name = payload.name;
    user.surname = payload.surname;
    user.email = payload.email;
    user.password = payload.password;

    var post_payload = {user: user};

    return this._super(store, type, post_payload, id);
  }
});
