const geojsonvt = require('geojson-vt');
const vtpbf = require('vt-pbf');

module.exports = class LayerSlicer {
  constructor(data) {
    try {
      this.tileIndex = geojsonvt(data);
    } catch(err) {
     console.log('Can`t parse GeoJson', err);
    }
  }

  getTile(z, x, y) {
    return this.tileIndex.getTile(z, x, y);
  }

  getBuff(z, x, y) {
    const tile = this.tileIndex.getTile(z, x, y);
    return vtpbf.fromGeojsonVt({ 'geojsonLayer': tile });
  }
};
