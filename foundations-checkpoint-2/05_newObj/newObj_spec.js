describe("newObj function", function() {
  var LittleMouse, value;

  beforeEach(function() {


    LittleMouse = function() {
      this.sound = "Squeak!";
    }

    LittleMouse.prototype.color = "White";

    value = newObj(LittleMouse);

  });

  it("returns an empty object", function() {
    expect(Object.keys(value).length).toEqual(0);
  });



  it("the internal prototype (__proto__) of the empty object (the value object) is the constructor functions `.prototype` object", function() {
    expect(Object.getPrototypeOf(value)).toEqual(LittleMouse.prototype);

    // Documentation for Object.getPrototypeOf(): https://mzl.la/2b3ohlm . 
  });

  it("Calls Object.create", function(){
    spyOn(Object, "create").and.callThrough();    

    newObj(LittleMouse);

    expect(Object.create).toHaveBeenCalled();
  });

});

