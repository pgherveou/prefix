// module globals

var prefixes = ['webkit','Moz','ms','O']
  , len = prefixes.length
  , test = document.createElement('p')
  , capitalize = function (str) {return str.charAt(0).toUpperCase() + str.slice(1);}
  , dasherize = function(str) {
      return str.replace(/([A-Z])/g, function(str,m1) {
        return '-' + m1.toLowerCase();
      });
    };

/**
 * get prefix for dom style
 *
 * example
 *   prefix('transform') // webkitTransform
 *   prefix('transform', true) // -webkit-transform
 *
 * @param  {String}   ppty dom style
 * @param  {Boolean}  dasherize
 * @return {String}   prefixed ppty
 * @api public
 */

module.exports = function(ppty, dasherized) {
  var Ppty, name, Name;

  // test without prefix
  if (test.style[ppty] !== undefined) {
    if (!dasherized) return ppty;
    return dasherize(ppty);
  }

  // test with prefix
  Ppty = capitalize(ppty);
  for (i = 0; i < len; i++) {
    name = prefixes[i] + Ppty;
    if (test.style[name] !== undefined) {
      if (!dasherized) return name;
      return '-' + prefixes[i].toLowerCase() + '-' + dasherize(ppty);
    }
  }

  // not found return empty string
  return '';
};
