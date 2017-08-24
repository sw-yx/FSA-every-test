describe("Don't Spill The Beans", function() {
    var secret;
    beforeEach(function() {
        secret = dontSpillTheBeans("I'm proposing to my significant other this Friday");
    });
    
    it("`dontSpillTheBeans` is a function", function() {
        
        expect(typeof dontSpillTheBeans).toEqual("function");
    });

    it("returns an object", function() {        
        expect(typeof secret).toEqual('object');
    });

    it("the object returned has `getSecret` and `setSecret` properties", function() {
        // Not sure what Object.keys is? Check the documentation - https://mzl.la/2bj8226
        var properties = Object.keys(secret);
        
        // checks for values in the array Object.keys returns, these are the property names on "secret" object. 
        expect((properties.indexOf("getSecret") >= 0 && properties.indexOf("setSecret") >= 0)).toEqual(true);
        expect(properties.length === 2).toEqual(true);
    });

    it("`getSecret` and `setSecret` are functions", function() {
        expect(typeof secret.getSecret).toEqual("function");
    });

    it("`getSecret` returns `secret` value that was passed to the dontSpillTheBeans function", function(){
        expect(secret.getSecret()).toEqual("I'm proposing to my significant other this Friday");
    });

    it("`setSecret` re-assigns the secret value to a new value", function(){
        var supriseForMom = dontSpillTheBeans("I'm throwing a surprise 60th Birthday Party for my Mom in two months!");
        supriseForMom.setSecret("I'm taking my mother on vacation for her 60th Birthday!");


        expect(supriseForMom.getSecret()).toEqual("I'm taking my mother on vacation for her 60th Birthday!");
        expect(Object.keys(supriseForMom).length).toEqual(2);        
    });
})