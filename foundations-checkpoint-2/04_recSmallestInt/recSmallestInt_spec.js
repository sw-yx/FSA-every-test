
describe("recursive smallest Int", function() {

  it("Calls itself recursively", function() {
    spyOn(window, 'recSmallestInt').and.callThrough();
    recSmallestInt([8,4,0,8,5]);
    expect(recSmallestInt.calls.count()).toBeGreaterThan(1);

  });

  it("Returns the smallest integer", function() {
    var smallest = recSmallestInt([8,4,0,8,5]);
    expect(smallest).toEqual(0);
  });

  it("Returns the smallest integer, when negative", function() {
    var smallest = recSmallestInt([-5,4,0,8,5]);
    expect(smallest).toEqual(-5);
  });


})