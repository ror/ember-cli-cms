//import Configuration from './configuration';
//import getGlobalConfig from 'simple-auth/utils/get-global-config';
import Authenticator from '../authenticators/onecoinim';
import Authorizer from '../authorizers/onecoinim';

export default {
  name:       'simple-auth-onecoinim',
  before:     'simple-auth',
  initialize: function(container, application) {
    //var config = getGlobalConfig('simple-auth-devise');
    //Configuration.load(container, config);
    application.register('simple-auth-authorizer:onecoinim', Authorizer);
    application.register('simple-auth-authenticator:onecoinim', Authenticator);
  }
};
