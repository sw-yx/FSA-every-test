
function Pokemon(name,health,attackBonus){
	this.name = name;
	this.health = health;
	this.attackBonus = attackBonus;
}
Pokemon.prototype.biteAttack = function(){
	return this.attackBonus + 2;
}
Pokemon.prototype.isDefeated = function(){
	return this.health <= 0;
}


function simulateBattle(pk1,pk2,firstmover){
    do {
        var onepk = pk1.name == firstmover ? pk1 : pk2;
        var twopk = pk1.name != firstmover ? pk1 : pk2;
        twopk.health -= onepk.attackBonus;
        if (twopk.isDefeated()) return onepk.name + ' Wins!';
        onepk.health -= twopk.attackBonus;
        if (onepk.isDefeated()) return twopk.name + ' Wins!';
    }
    while (!pk1.isDefeated() && !pk2.isDefeated())
    return 'swyx loses';
}