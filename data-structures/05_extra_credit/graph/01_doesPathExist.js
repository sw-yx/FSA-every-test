// pathExists = function (graph, start, end) {
// 	var q = []
// 	this.temp_node = start
// 	while(this.temp_node){
// 		if (this.temp_node === end) return true
// 		graph[this.temp_node].forEach(x=>q.push(x))
// 		this.temp_node = q.pop()
// 	}
// 	return false
// }

pathExists = function(graph, start, end) {
	var paths = []
	this.pathqueue = []
	this.temp_path = [start]
	while (this.temp_path) {
		// eval function
		var pathlastletter = this.temp_path[this.temp_path.length-1]
		if (pathlastletter === end) return true
		// queue up all child nodes
		graph[pathlastletter].forEach(x => {
			if (!this.temp_path.includes(x)) {
				this.pathqueue.push(this.temp_path.concat(x))
			}
		})
		// dequeue child node
		this.temp_path = this.pathqueue.shift()
	}
  return false
}
