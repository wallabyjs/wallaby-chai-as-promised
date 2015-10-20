var Calculator = function () {

};

Calculator.prototype.add = function (a, b) {
  return ES6Promise.Promise.resolve(a + b);
};
