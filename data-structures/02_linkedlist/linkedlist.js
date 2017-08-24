function Node(val, next = null, previous = null){
	this.value = val
	this.next = next
	this.previous = previous
}

function LinkedList(){
	this.head = null
	this.tail = null
}

LinkedList.prototype.addToTail = function(x){
	var oldTail = this.tail
	this.tail = new Node(x, null, oldTail)
	if (oldTail) oldTail.next = this.tail
	if (!this.head) this.head = this.tail
}

LinkedList.prototype.removeHead = function(){
	if (!this.head) {
		return null
	} else {
		var oldHead = this.head
		this.head = this.head.next
		if (this.head) this.head.previous = null
		if (!this.head) this.tail = null
		return oldHead.value
	}
}

LinkedList.prototype.removeTail = function(){	
	if (!this.tail) {
		return null
	} else {
		// this.tail points to this.tail.next
		var oldTail = this.tail
		this.tail = this.tail.previous
		if (this.tail) this.tail.next = null
		// and return this.tail.next
		if (!this.tail) this.head = null
		return oldTail.value
	}
}

LinkedList.prototype.addToHead = function(y){
	var oldHead = this.head
	this.head = new Node(y, oldHead, null)
	if (oldHead) oldHead.previous = this.head
	if (!this.tail) this.tail = this.head
}

LinkedList.prototype.search = function(x){ 
	var currentHead = this.head
	while (currentHead){
		if(typeof x == "function" && x(currentHead.value)){
			return currentHead.value
		}
		if (currentHead.value == x){
			return currentHead.value
		}
		else{
			currentHead = currentHead.next
		}
	}
	return null
}













