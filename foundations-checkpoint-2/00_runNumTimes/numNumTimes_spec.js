
describe("runNumTimes function", function() {

  it("takes a function as a parameter, and runs that function num times", function() {
    var myString = "";
    runNumTimes(function(){myString += "hello"}, 3);
    
    expect(myString).toEqual("hellohellohello");
  });

});
