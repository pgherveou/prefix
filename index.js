// module globals

var cache = {}
  , prefixes = ['webkit','Moz','ms','O', '']
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

  Ppty = ppty.charAt(0).toUpperCase() + str.slice(1);
  for (i = 0; i < len; i++) {
    name = prefixes[i] + Ppty;
    if (el.style[name]) {
      cache[ppty] = ppty;
      return name;
    }
  }
};