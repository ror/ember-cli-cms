import DS from 'ember-data';
import config from '../config/environment';

export default DS.ActiveModelAdapter.extend(config.adapter);
