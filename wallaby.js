module.exports = function (wallaby) {
  return {
    files: [
      // PhantomJs Function.bind polyfill
      {pattern: 'node_modules/phantomjs-polyfill/bind-polyfill.js', instrument: false},
      // ES6 promise polyfill
      {pattern: 'node_modules/es6-promise/dist/es6-promise.js', instrument: false},

      {pattern: 'node_modules/chai/chai.js', instrument: false},
      {pattern: 'node_modules/chai-as-promised/lib/chai-as-promised.js', instrument: false},
      {pattern: 'src/**/*.js'}
    ],

    tests: [
      {pattern: 'test/**/*Spec.js'}
    ],

    testFramework: "mocha",

    setup: function () {
      window.expect = chai.expect;
      var should = chai.should();
    }
  };
};
