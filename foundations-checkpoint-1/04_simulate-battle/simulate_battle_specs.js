describe("Pokemon class", function(){
    var pikachu;
    
    beforeEach(function(){
        pikachu = new Pokemon("Pikachu", 250, 4);
    });

    it("should have a name property", function(){
        expect(pikachu.name).toEqual("Pikachu");
    });

    it("should have a health and attackBonus property", function(){
        expect(pikachu.health).toEqual(250);
        expect(pikachu.attackBonus).toEqual(4);
    });

    describe("Methods and properties on the Pokemon Constructor Functions `.prototype` object'", function() {
        it("should have a biteAttack and isDefeated function on its .prototpye", function() {
            expect(typeof pikachu.biteAttack === "function").toEqual(true);
            expect(pikachu.hasOwnProperty("biteAttack")).toEqual(false);
            expect(Pokemon.prototype.hasOwnProperty("biteAttack")).toEqual(true);
            
            expect(typeof pikachu.isDefeated).toEqual("function");
            expect(pikachu.hasOwnProperty("isDefeated")).toEqual(false);        
            expect(Pokemon.prototype.hasOwnProperty("isDefeated")).toEqual(true);        
        });

        it("the `biteAttack` method should return the sum of the `attackBonus` property + 2", function(){
            expect(pikachu.biteAttack()).toEqual(6);    
        });

        it("the `isDefeated` method returns `false` if the health property is >= 1", function() {
            expect(pikachu.isDefeated()).toEqual(false);
        });

        it("the `isDefeated` method returns if `true` the health property is <= 0", function() {
            pikachu.health = pikachu.health-250;
            expect(pikachu.isDefeated()).toEqual(true);
        });
    });
});

describe('simulateBattle function', function() {
    var pikachu,
        charizard;

    beforeEach(function() {
        pikachu = new Pokemon('Pikachu', 250, 4);
        charizard = new Pokemon('Charizard', 300, 5);
    });

    it("returns a string", function(){
        expect(typeof simulateBattle(pikachu, charizard, 'Pikachu')).toEqual('string');
    });

    it("returns the winner (the pokemon that has health remaining)", function(){
        expect(simulateBattle(pikachu, charizard, "Pikachu")).toEqual("Charizard Wins!");
    });

    it("works on multiple instances", function(){
        var krabby = new Pokemon("Krabby", 400, 5),
            squirtle = new Pokemon("Squirtle", 600, 2);

        expect(simulateBattle(krabby, squirtle, "Krabby")).toEqual("Krabby Wins!");
    });




})


