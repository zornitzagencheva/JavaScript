function treeHouseCompare(a, b) {
    //This code find area of house;
    var baseOfTriangle = a;
    var heightOfTriangle = a - (a / 3);
    var areaOfTriangle = ((baseOfTriangle * heightOfTriangle) / 2);
    var areaOfSquare = a * a;
    var areaOfHouse = areaOfSquare + areaOfTriangle;

    //This code find area of tree;
    var widthOfRectangle = b / 3;
    var heightOfRectangle = b;
    var areaOfRectangle = heightOfRectangle * widthOfRectangle;
    var radiusOfCircle = widthOfRectangle * 2;
    var areaOfCircle = (Math.PI * (radiusOfCircle * radiusOfCircle));
    var areaOfTree = areaOfRectangle + areaOfCircle;

    if(areaOfHouse > areaOfTree) {
        console.log("house/ " + areaOfHouse.toFixed(2));
    }else {
        console.log("tree/ " + areaOfTree.toFixed(2));
    }
}