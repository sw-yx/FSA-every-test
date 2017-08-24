function findObjPropsHasOwn(shape) {
    var ans = "";
    ['color','height','width'].map(function(key){
        ans += shape.hasOwnProperty(key) ? key + ", " : "";
    });
    return ans.slice(0,-2);
}

function findObjKeys(shape){
    return Object.keys(shape).join(', ');
}