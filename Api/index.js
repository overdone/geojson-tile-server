const readFile = require('../FileReader');
const LayerSlicer = require('../LayerSlicer');

const LayerCache = require('../LayerCache');
const cache = new LayerCache();

module.exports.layerAdd = async (ctx) => {
  const data = await readFile('./dummy.geojson');
  ctx.body = { id: cache.addLayer(new LayerSlicer(JSON.parse(data))) };
};

module.exports.buffGet = async (ctx) => {
  const layer = cache.getLayer(ctx.params.id);
  if (layer) {
    ctx.body = { tile: layer.getBuff(
        parseInt(ctx.params.z),
        parseInt(ctx.params.x),
        parseInt(ctx.params.y))
    };
  } else {
    ctx.body = { error: `Layer ${ctx.params.id} not found` }
  }
};
