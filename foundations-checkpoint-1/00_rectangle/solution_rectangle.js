
function Rectangle(color,height,width){
	this.color = color;
	this.height = height;
	this.width = width;
	this.offspring = [];
}
Rectangle.prototype.getArea = function(){
	return this.height * this.width;
}