// i have to admit i don't really understand the practical use of this thing at all
function newObj(fn){
    var x = new fn()
    var proto = Object.getPrototypeOf(x)
    return Object.create(proto);
}