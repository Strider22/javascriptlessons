//The interpolated value lies distance "fraction" from
//value1 to value2
function MathUtils(){};


MathUtils.interpolateValue = function (value1, value2, fraction) {
    return (value1 * (1.0 - fraction)) + (value2 * fraction);
};

