const PI = 3.14;
let area = 0;

function calculateCircleArea(radius) {
    return radius * radius * PI;
}

area = calculateCircleArea(3);
console.log(area);

area = calculateCircleArea(4)
console.log(area)