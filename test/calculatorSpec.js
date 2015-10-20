describe('calculator', function () {

  beforeEach(function () {
    this.calculator = new Calculator();
  });

  it('should add numbers', function () {
    return this.calculator.add(2, 2).should.eventually.equal(4);
  });
});
