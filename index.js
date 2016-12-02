/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-mapbox',

  included: function included(app) {
    // Mapbox
    app.import(app.bowerDirectory + '/mapbox.js/mapbox.js');
    app.import(app.bowerDirectory + '/mapbox.js/mapbox.css');

    // Leaflet markercluster
    app.import(app.bowerDirectory + '/leaflet.markerclusterer/dist/leaflet.markercluster.js');
    app.import(app.bowerDirectory + '/leaflet.markerclusterer/dist/MarkerCluster.css');
    app.import(app.bowerDirectory + '/leaflet.markerclusterer/dist/MarkerCluster.Default.css');
  },

  treeForPublic: function() {
    var mapboxPath = path.join(this.app.bowerDirectory, 'mapbox.js');
    var mapboxTree = new Funnel(this.treeGenerator(mapboxPath), {
      srcDir: '/images',
      destDir: '/assets/images'
    });

    return mapboxTree;
  }
};
