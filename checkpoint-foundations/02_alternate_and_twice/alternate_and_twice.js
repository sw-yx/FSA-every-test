function alternate(fn) {
    var a = false;
    return function () {
        a = !a;
        if (a) {   
            return fn()
        }
    }
}

function twice(fn) {
    var a = 0;
    return function () {
        a += 1;
        if (a < 3) {   
            return fn()
        } else {
            return 0
        }
    }
}