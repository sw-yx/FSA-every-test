function Queue(){
	this.array = []
	this.head = 0
	this.tail = 0
}

Queue.prototype.enqueue = function(newVal){
	this.tail += 1
	this.array[this.tail] = newVal
}
Queue.prototype.dequeue = function(){
	this.head += 1
	return this.array[this.head]
}
Queue.prototype.size = function(){
	return (this.tail >= this.head)?(this.tail - this.head):0
}