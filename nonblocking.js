/**
 * Created by sahil on 2017-01-11.
 */

//link to the fileSystem library

var fs = require('fs');

//get drinks
var drinks = fs.readFile('drinks.txt', "utf8", function
    (err, drinks){
    //if we get drinks, print them out
    console.log(drinks);
});
