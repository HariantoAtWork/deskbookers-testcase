var Vue = require('vue');

require('../core/filter')(Vue);
require('../core/directive')(Vue);
require('../core/partial')(Vue);
require('../core/component')(Vue);
// require('../core/transition')(Vue);

module.exports = Vue;