function threeTimes(fn) {
    var a = 0;
    return function () {
        a += 1;
        if (a < 4) {   
            return fn()
        }
        else {
            return
        }
    }
}