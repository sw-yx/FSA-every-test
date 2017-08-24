function callAll(obj,fnArr){
    var ans = []
    fnArr.map(fn => {
        ans.push(fn.call(obj))
    })
    return ans
}