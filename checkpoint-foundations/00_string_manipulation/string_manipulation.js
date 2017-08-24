let vowels = [
    'a','e','i','o','u'
]
function vowelsCount(str) {
    var x = 0;
    str.split('').map(y => {
        if (vowels.indexOf(y.toLowerCase()) > -1)
            x += 1;
    })
    return x;
}