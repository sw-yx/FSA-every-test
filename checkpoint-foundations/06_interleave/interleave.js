function interleave(){
    // find max length
    var maxlen = 0
    for (var j=0;j<arguments.length;j++){
       maxlen = Math.max(arguments[j].length,maxlen);
    }
    // go nuts
    var x = ""
    for (var i=0;i<maxlen;i++){
        for (var j=0;j<arguments.length;j++){
            x += arguments[j][i] ? arguments[j][i] : ""
        }
    }
    return x
}