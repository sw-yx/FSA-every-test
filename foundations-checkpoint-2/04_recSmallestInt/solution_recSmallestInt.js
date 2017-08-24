
function recSmallestInt(arr,x){
    var lowest = x < arr[0] ? x : arr[0];
    return arr.length == 1 ? x : recSmallestInt(arr.slice(1), lowest)
}