function HashTable(){
	this.numBuckets = 35
	this.Table = {}
}

HashTable.prototype.set = function (key, val){
	var objAtHash = this.Table[this.hash(key)]
	if (!objAtHash) objAtHash = {};
	objAtHash[key] = val	
	this.Table[this.hash(key)] = objAtHash
}

HashTable.prototype.get = function (key){
	return this.Table[this.hash(key)][key]
}

HashTable.prototype.hasKey = function (key){
	var objAtHash = this.Table[this.hash(key)]
	if (objAtHash) {
		return Boolean(objAtHash[key])
	} else {
		return false
	}
}

HashTable.prototype.hash = function (string){
	if (typeof string != "string") throw new TypeError("Keys must be strings")
	var ans = 0
	string.split("").forEach(function(x){
		ans += x.charCodeAt()
	})
	return ans % 35
}