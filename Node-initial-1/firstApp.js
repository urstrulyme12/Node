// fs is filesystem module
const fs = require('fs')
fs.writeFileSync('first.txt','This is the node created file with data');

fs.appendFileSync('first.txt',"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")


const cars = require('./firstutils.js')

let color,brand;
const car1 = cars(color='red',brand='tata')

const car2 = cars(color='black',brand='honda')
console.log('object data'+car1,car2);



// const friut = require('./utils.js')
// console.log('hello')
// console.log(friut)