// function LinkedList(){
//     this.head = null;
//     this.tail = null;
// }

// function Node(value){
//     this.value = value;
//     this.next = null;
//     this.previous = null;
// }



// LinkedList.prototype.addToHead = function(value){
//     var newNode = new Node(value);
//     var oldNode = this.head
//     if(oldNode) oldNode.previous = newNode;
//     newNode.next = oldNode;
//     this.head = newNode;
//     if(!this.tail) this.tail = newNode;
// }

// LinkedList.prototype.addToTail = function(value){
//     var newNode = new Node(value);
//     var oldNode = this.tail
//     if(oldNode) oldNode.next = newNode;
//     newNode.previous = oldNode;
//     this.tail = newNode;
//     if(!this.head) this.head = newNode;
// }

// LinkedList.prototype.removeHead = function(){
//     if(!this.head) return null; 
//     var nextNode = this.head.next;
//     var nodeValue = this.head.value;
//     if(nextNode) nextNode.previous = null;
//     this.head = nextNode;
//     if(!this.head){
//         this.tail = null;
//     }
//     return nodeValue;
// }

// LinkedList.prototype.removeTail = function(){
//     if(!this.tail) return null; 
//     var nextNode = this.tail.previous;
//     var nodeValue = this.tail.value;
//     if(nextNode) nextNode.next = null;
//     this.tail = nextNode;
//     if(!this.tail){
//         this.head = null;
//     }
//     return nodeValue;
// }
// LinkedList.prototype.search = function(value){
//     var pointer = this.head;
//     while(pointer.next){
//         if(value === pointer.value){
//             return value;
//         }
//         pointer = pointer.next;
//     }
//     return null;
// }

