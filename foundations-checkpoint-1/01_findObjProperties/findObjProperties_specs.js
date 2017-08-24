describe("Looping to find Object properties using .hasOwnProperty", function() {

  it("should print out the object's only key", function() {
    var shape1 = {color: 'green'};

    expect(findObjPropsHasOwn(shape1)).toEqual("color");
  });

  it("should print out the object's keys, comma delimited", function() {
    var shape2 = {color: 'yellow', height: 8, width: 5};

    expect(findObjPropsHasOwn(shape2)).toEqual("color, height, width");
  });

  it("should print keys belonging to the object instance, not on the prototype", function() {
   /*
    What is Rectangle? Rectangle is the Constructor Function created in 00_rectangle.
    You DON'T need to copy and past the Rectangle function into the solutions_findObjProperties.js file if you
    run testem from foundations-checkpoint-part-1 aka the parent directory.  If you run testem from 01_findObjProperties and receive
    an error that "Rectangle" is not defined, copy and paste the code from 00 into solution_findObjProperties.js
    */
    var shape3 = new Rectangle("blue", 5, 3);

    expect(findObjPropsHasOwn(shape3)).toEqual("color, height, width");
  });

  it("should use the `.hasOwnProperty` method", function(){
    var shape4 = new Rectangle("purple", 7, 2);    
    spyOn(shape4, "hasOwnProperty").and.callThrough();  // checks to see if hasOwnProperty is called
    
    findObjPropsHasOwn(shape4);
    
    expect(shape4.hasOwnProperty).toHaveBeenCalled();
    // Note: do no use .call on Object.hasOwnProperty.call(shape4);        
  });

});


describe("Looping to find Object properties using `Object.keys` ", function() {

  it("should print out the object's only key", function() {
    var shape1 = {color: 'green'};

    expect(findObjKeys(shape1)).toEqual("color");
  });

  it("should print out the object's keys, comma delimited", function() {
    var shape2 = {color: 'yellow', height: 8, width: 5};

    expect(findObjKeys(shape2)).toEqual("color, height, width");
  });

  it("should print keys belonging to the object instance, not on the prototype", function() {
    /*
    What is Rectangle? Rectangle is the Constructor Function created in 00_rectangle.
    You DON'T need to copy and past the Rectangle function into the solutions_findObjProperties.js file if you
    run testem from foundations-checkpoint-part-1 aka the parent directory.  If you run testem from 01_findObjProperties and receive
    an error that "Rectangle" is not defined, copy and paste the code from 00 into solution_findObjProperties.js
    */
    var shape3 = new Rectangle("blue", 5, 3);

    expect(findObjKeys(shape3)).toEqual("color, height, width");
  });

  it("should use `Object.keys` method", function(){
    var shape4 = new Rectangle("purple", 7, 2);    
    spyOn(Object, "keys").and.callThrough(); // Checks if Object.keys is called
    
    findObjKeys(shape4);
    
    expect(Object.keys).toHaveBeenCalled();
    // Note: do no use Object.hasOwnProperty.call(shape4);        
  });

});
