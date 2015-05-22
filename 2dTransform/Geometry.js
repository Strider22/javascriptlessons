//Don't know how I should accurately show dependence on MathUtils.

function Point(){
    this.x = 0;
    this.y = 0;
    this.z = 0;

    this.dump = function(heading){
        if(heading){
            document.write(heading + "<br>");
        }
        document.write(this.x + " " + this.y + " " + this.z + "<br>");
    };
}

/**
 * Interpolate x,y and z values of a two points
 * @param point1
 * @param point2
 * @param fraction
 */
Point.interpolate = function (point1, point2, fraction) {
    var interpolatedPoint = new Point();
    interpolatedPoint.x = MathUtils.interpolateValue(point1.x,point2.x, fraction);
    interpolatedPoint.y = MathUtils.interpolateValue(point1.y,point2.y, fraction);
    interpolatedPoint.z = MathUtils.interpolateValue(point1.z,point2.z, fraction);
    return interpolatedPoint;
};



/**
 * An Anime Studio shape composed of a set of points.
 */
function VectorShape(){
    this.points = [];
    this.dump = function(heading){
        if(heading){
            document.write(heading + "<br>");
        }
        document.write("points <br>");
        this.points.forEach(function(item){
            item.dump();
        });
    };

    this.addPoint = function(x, y, z){
        var point = new Point();
        point.x = x||0; point.y = y||0; point.z =z||0;
        this.points.push(point);
    };

    //The interpolated value lies distance "fraction" from
    //value1 to value2
    this.interpolatePoints = function(value1, value2, fraction){
        return (value1 * (1.0 - fraction)) + (value2 * fraction);
    };

}


VectorShape.interpolate = function(shape1, shape2, fraction){
    var interpolatedShape = new VectorShape();
    for(var i = 0; i < shape1.points.length ; i++){
        interpolatedShape.points[i] = Point.interpolate(shape1.points[i], shape2.points[i], fraction);
    }
    return interpolatedShape;
};
