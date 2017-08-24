function Laptop (year,hd) {
    this.year = year
    this.hd = hd
}

Laptop.prototype.checkSpecs = function(){
    return "Year: " + this.year + ", HD: " + this.hd
}

var Macbook = function(year,hd,color){
    Laptop.apply(this,[year,hd]);
    this.color = color;
};

function extendWithObjectCreate(child,parent){
    child.prototype = Object.create(parent.prototype)
}

function extendWithNewKeyword(child,parent){
    var x = new parent
    child.__proto__ = x.prototype
}