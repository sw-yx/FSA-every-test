function keyAdder() {
    var i = 0;
    //i'm not sure why i have to use "this" but the test is not passing the object properly otherwise
    Object.values(this).map(x => {
        if (typeof x === 'number')
            i += x;
    })
    return i
}
