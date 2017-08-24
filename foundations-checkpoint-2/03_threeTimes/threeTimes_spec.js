

describe("threeTimes function", function() {

  var returnFive;

  beforeEach(function() {
    returnFive = threeTimes(function() {
      return 5
    });
  });

  it("returns a function that can be invoked thrice", function() {
    var value = returnFive() + returnFive() + returnFive();
    expect(value).toEqual(15);
  });

  it('returns a function that cannot be invoked more than thrice', function() {
    var value = returnFive() + returnFive() + returnFive() + returnFive();

    //We expect value to be NaN because we cannot add undefined to a number.
    expect(isNaN(value)).toEqual(true);
  });

});

