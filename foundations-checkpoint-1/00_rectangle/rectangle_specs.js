describe("Rectangle constructor", function() {
  var rectangle;

  // rectangle is a constructor function
  beforeEach(function() {
    rectangle = new Rectangle("blue", 5, 3);
  });

  it("should set the color and height of the rectangle", function() {
    expect(rectangle.color).toEqual("blue");
    expect(rectangle.height).toEqual(5);
    expect(rectangle.width).toEqual(3);
  });

  it("should have a function getArea on its prototype that returns the area of the rectangle", function() {
    expect(rectangle.hasOwnProperty('getArea')).toEqual(false);
    expect(Rectangle.prototype.hasOwnProperty('getArea')).toEqual(true);
    expect(rectangle.getArea()).toEqual(15);
  });

});
