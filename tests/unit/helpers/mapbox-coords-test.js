import { mapboxCoords } from '../../../helpers/mapbox-coords';
import { module, test } from 'qunit';

module('Unit | Helper | mapbox coords');
test('it makes an array', function(assert) {
  let result = mapboxCoords([1, 2]);
  assert.deepEqual(result, [1, 2]);
});
