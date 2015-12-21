import Ember from 'ember';
import layout from '../templates/components/mapbox-marker';

export default Ember.Component.extend({
  classNameBindings: ['isLoaded'],
  layout: layout,
  iconUrl: '',
  iconRetinaUrl: '',
  iconSize: [30, 45],
  iconAnchor: [15, 45],
  popupAnchor: [0, -45],
  marker: null,
  isLoaded: Ember.computed('map', 'marker', function () {
    let map = this.get('map');
    let marker = this.get('marker');
    if (!Ember.isEmpty(map) && !Ember.isEmpty(marker)) {
      marker.addTo(map);
      return true;
    } else {
      return false;
    }
  }),

  setup: Ember.on('didInsertElement', function () {
    Ember.run.scheduleOnce('afterRender', this, function () {
      var myIcon = L.icon({
        iconUrl: this.get('iconUrl'),
        iconRetinaUrl: this.get('iconRetinaUrl'),
        iconSize: this.get('iconSize'),
        iconAnchor: this.get('iconAnchor'),
        popupAnchor: this.get('popupAnchor'),
      });
      let marker = L.marker(this.get('coordinates'), {
        icon: myIcon,
      });

      marker.bindPopup(this.get('popup-title'));

      marker.on('click', () => {
        this.sendAction('onclick');
      });

      this.set('marker', marker);
    });
  }),

  teardown: Ember.on('willDestroyElement', function () {
    let marker = this.get('marker');
    let map = this.get('map');
    if (map && marker) {
      map.removeLayer(marker);
    }
  }),

  popup: Ember.on('didRender', function () {
    if (this.get('is-open')) {
      this.get('marker').openPopup();
    }
  }),
});
