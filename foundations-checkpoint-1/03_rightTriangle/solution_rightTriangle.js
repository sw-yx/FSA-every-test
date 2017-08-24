function rightTriangle(x){
    var ans = []
    for(var i = x;i>0;i--){
        ans.push(new Array(i + 1).join('*'));
    }
    return ans.join('\n');
}