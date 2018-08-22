const LRU = require('lru-cache');
const uuid4 = require('uuid/v4');

const options = {
  max: 100,
  maxAge: 1000 * 60 * 60,
  length: n => n.length,
  dispose: (key, n) => n.close(),
};

module.exports = class LayerCache {
  constructor() {
    this.cache = LRU(options);
  }

  getLayer(id) {
    return this.cache.get(id);
  }

  addLayer(data) {
    const id = uuid4();
    this.cache.set(id, data);

    return id;
  }
}



