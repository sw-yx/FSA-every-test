function QueueCirc(v) {
    this.data = new Uint8Array(v);
    // this.count = 0
    this.head = 0
    this.tail = 0
}

QueueCirc.prototype.enqueue = function (x) {
    if (this.tail - this.head >= this.data.length) throw('ack')
    this.data[this.tail % this.data.length] = x
    if (this.data[this.tail % this.data.length] != x) throw('ack')
    this.tail += 1
}
QueueCirc.prototype.dequeue = function () {
    if (this.tail - this.head < 1) throw('ack')
    this.head += 1
    return this.data[this.head - 1]
}