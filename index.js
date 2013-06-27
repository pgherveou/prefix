// module globals

var prefixes = ['webkit','Moz','ms','O']
  , len = prefixes.length
  , p = document.createElement('p')
  , style = p.style
  , capitalize = function (str) {return str.charAt(0).toUpperCase() + str.slice(1);}
  , dasherize = function(str) {
      return str.replace(/([A-Z])/g, function(str,m1) {
        return '-' + m1.toLowerCase();
      });
    };

// nullify p to release dom node
p = null;

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
  if (style[ppty] !== undefined) {
    if (!dasherized) return ppty;
    return dasherize(ppty);
  }

  // test with prefix
  Ppty = capitalize(ppty);
  for (i = 0; i < len; i++) {
    name = prefixes[i] + Ppty;
    if (style[name] !== undefined) {
      if (!dasherized) return name;
      return '-' + prefixes[i].toLowerCase() + '-' + dasherize(ppty);
    }
  }

  // not found return empty string
  return '';
};
