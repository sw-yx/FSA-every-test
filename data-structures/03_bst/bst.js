"use strict";

function BinarySearchTree(value, left = null, right = null){
    // this.top = new Node2(value)
	this.insert = function(v){
        if (this.value < v) {
            if (this.right) {
                this.right.insert(v) 
            } else {
                this.right = new BinarySearchTree(v)
            }
        } else {
            if (this.left) {
                this.left.insert(v) 
            } else {
                this.left = new BinarySearchTree(v)
            }
        }
	}
	this.contains = function(v){
        if (this.value == v) {
            return true
        } else {
            if (this.right) {
                var rightside = this.right.contains(v) 
            } else {
                var rightside = false
            }
            if (this.left) {
                var leftside = this.left.contains(v) 
            } else {
                var leftside = false
            }
            return leftside || rightside
        }

	}
	this.depthFirstForEach = function(fn, mode){
        switch (mode) {
            case 'pre-order':
                // visit the root
                fn(this.value)
                // Inorder(left-subtree)
                if (this.left) this.left.depthFirstForEach(fn, mode);
                // Inorder right subtree
                if (this.right) this.right.depthFirstForEach(fn, mode);
                break;
            case 'post-order':
                // Inorder(left-subtree)
                if (this.left) this.left.depthFirstForEach(fn, mode);
                // Inorder right subtree
                if (this.right) this.right.depthFirstForEach(fn, mode);
                // visit the root
                fn(this.value)
                break;
            default:
                // Inorder(left-subtree)
                if (this.left) this.left.depthFirstForEach(fn, mode);
                // visit the root
                fn(this.value)
                // Inorder right subtree
                if (this.right) this.right.depthFirstForEach(fn, mode);

        }
	}
	this.breadthFirstForEach = function(fn){
        this.BFqueue = new Queue()
        this.temp_node = this

        while (this.temp_node){
            fn(this.temp_node.value)
            if (this.temp_node.left) this.BFqueue.enqueue(this.temp_node.left)
            if (this.temp_node.right) this.BFqueue.enqueue(this.temp_node.right)
            this.temp_node = this.BFqueue.dequeue()
        }
	}
    
	this.size = function(){
        var leftIsEmpty = !this.left
        var rightIsEmpty = !this.right
        if (leftIsEmpty && rightIsEmpty) {
            return 1
        } else {
            var leftsize = !this.left ? 0 : this.left.size()
            var rightsize = !this.right ? 0 : this.right.size()
            return leftsize +  rightsize + 1
        }
	}
	this.value = value
	this.left = left
	this.right = right
}


function Queue(){
    this.enqueue = function(newVal){
        this.tail += 1
        this.array[this.tail] = newVal
    }
    this.dequeue = function(){
        this.head += 1
        return this.array[this.head]
    }
    this.size = function(){
        return (this.tail >= this.head)?(this.tail - this.head):0
    }
    this.array = []
    this.head = 0
    this.tail = 0
}