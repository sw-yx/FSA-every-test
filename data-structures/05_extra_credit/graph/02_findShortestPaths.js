var shortestPaths = function(graph, start, end) {
	var paths = []
	var endfound = false
	this.pathqueue = []
	this.temp_path = [start]
	while (this.temp_path) {
		// eval function
		var pathlastletter = this.temp_path[this.temp_path.length-1]
		if (pathlastletter === end) {
			endfound = true
			paths.push(this.temp_path)
		}
		if (!endfound) {
			// queue up all child nodes
			graph[pathlastletter].forEach(x => {
				if (!this.temp_path.includes(x)) {
					this.pathqueue.push(this.temp_path.concat(x))
				}
			})
		}
		// dequeue child node
		this.temp_path = this.pathqueue.shift()
	}
	// kill the longer paths
	paths = paths.filter(x => x.length == paths[0].length)
  return paths
}
