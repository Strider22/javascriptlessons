function Object2D(name,x,y){
    this.name = name;
    this.x = x;
    this.y = y;
    this.type = "Object2D";
    this.area = 0;
    this.dump = function(){
        document.write("Name: " + this.name + "<br>");
        document.write("Type: " + this.type + "<br>");
        document.write("Position: " + this.x + ", " + this.y + "<br>");
        document.write("Area: " + this.area + "<br>");
        document.write("<br>");
    };
    this.move = function(dX, dY){
        document.write("Moving " + this.name + " [" + dX + "," + dY + "]<br>");
        this.x += dX;
        this.y += dY;
    }
}
