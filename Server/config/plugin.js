'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
    mysql: {
        enable: true,
        package: 'egg-mysql',
    },
    nunjucks : {
        enable: true,
        package: 'egg-view-nunjucks'
    },
    jwt : {
        enable: true,
        package: "egg-jwt"
    },

};
