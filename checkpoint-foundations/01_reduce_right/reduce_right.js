function reduceRight(arr,start,func) {
    var a = start;
    var b;
    for (var i=arr.length;i > 0; i--) {
        b = arr[i-1];
        a = func(a,b);
    }
    return a
}

function reduceRightRecursive(arr,start,func) {
    var b = arr[arr.length-1];
    var a = func(start,b);
    return arr.length > 1 ? reduceRightRecursive(arr.slice(0,arr.length-1),a,func) : a
}