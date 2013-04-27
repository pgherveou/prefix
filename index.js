// module globals

var cache = {}
  , prefixes = ['webkit','Moz','ms','O']
  , len = prefixes.length
  , test = document.createElement('p');

/**
 * get prefix for dom style
 *
 * @param  {String} ppty dom style
 * @return {String} prefixed ppty
 * @api public
 */

module.exports = function(ppty) {
  var Ppty, name;
  if ((name = cache[ppty])) return name;

  // test without prefix
  if (test.style[ppty] !== undefined) {
    cache[ppty] = ppty;
    return ppty;
  }

  // test with prefix
  Ppty = ppty.charAt(0).toUpperCase() + ppty.slice(1);
  for (i = 0; i < len; i++) {
    name = prefixes[i] + Ppty;
    if (test.style[name] !== undefined) {
      cache[ppty] = name;
      return name;
    }
  }

  // not found return empty string
  cache[ppty] = '';
  return '';
};