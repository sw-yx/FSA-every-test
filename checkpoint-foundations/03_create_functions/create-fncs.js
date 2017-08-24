function createFunctions(x){
    var arr = [];
    for (var i = 0;i<x;i++){
        (function(c) {arr.push(function () {return c})}(i));
    }
    return arr;
}