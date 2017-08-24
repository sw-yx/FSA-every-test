function reject(arr,func) {
    var ans = [];
    arr.map((x) => {
        if (!func(x)) ans.push(x)
    })
    return ans;
}