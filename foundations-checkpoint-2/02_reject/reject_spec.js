describe("reject function", function() {
  
  window.isNegNum; // attaches the function isNegNum to the global window object	
  
  it("Returns the values in the array that return 'false' after the function argument is invoked", function() {
    var arrayOfNumbers = [4, -57, 1778, -43, 9, 89, -345];
    isNegNum = function(num) { return num < 0 };	

    var positiveNumsOnly = reject(arrayOfNumbers, isNegNum);
    expect(positiveNumsOnly).toEqual([4, 1778, 9, 89]);
  });

  it("Calls `isNegNum` Function", function () {  	
  	spyOn(window, "isNegNum").and.callThrough(); // checks if the function passed to reject is invoked

  	reject([-4,5,10], isNegNum);

  	expect(window.isNegNum).toHaveBeenCalled();

  });

});
