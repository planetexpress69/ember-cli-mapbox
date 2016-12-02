import config from '../config/environment';

export default {
  name: 'mapbox-access-code',
  initialize(instance) {
    if (!config.mapbox || !config.mapbox.accessToken) {
      console.error('Please specify your mapbox.accessToken in your config.');
      return;
    }

    L.mapbox.accessToken = config.mapbox.accessToken;
  }
};
