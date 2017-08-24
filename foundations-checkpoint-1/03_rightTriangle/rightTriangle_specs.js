describe('make a right Triangle', function() {
  it('returns an empty string when the rows input is 0', function() {
    expect(rightTriangle(0)).toEqual("");
  });
  it('returns a string representation of a right triangle', function() {
    expect(rightTriangle(5)).toEqual( "*****\n****\n***\n**\n*" );
  });
});
