module.exports = {
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'mapbox.js', target: '2.3.0' },
      { name: 'leaflet.markerclusterer', target: '0.4.0' }
    ]);
  },
};
