
describe("using the Array.prototype.reduce function", function() {

  it("Use reduce to find the sum of the array, with a starting value of 100", function() {

    var callReduceOnThisArray = [1,2,3,4,5];
    spyOn(Array.prototype, 'reduce').and.callThrough();


    // ***** SOLUTION HERE *****
    //var sum = ...
    //your code here!! use the Array method 'reduce' to find the sum of the above array
    var sum = callReduceOnThisArray.reduce((a,b) => a+b,100);
    expect(sum).toEqual(115);
    expect(Array.prototype.reduce).toHaveBeenCalled();
  });

});
