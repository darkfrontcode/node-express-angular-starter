var stylus  = require('stylus'),
    nib = require('nib');

module.exports = function(str, path) {
  return stylus(str)
    .set('filename', path)
    .set('compress', true)
    .set('force', true)
    .use(nib())
    .import('nib');
}
