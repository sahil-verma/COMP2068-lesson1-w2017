/**
 * Created by sahil on 2017-01-11.
 */


//references the file system module that ships with the node
var fs = require('fs');

//drinks
console.log('DRINKS:');

var drinks = fs.readFileSync('drinks.txt', 'utf8');
consloe.log(drinks);

//food
console.log('FOOD:');

var food = fs.readFileSync('food.txt', 'utf8');
console.log(food);