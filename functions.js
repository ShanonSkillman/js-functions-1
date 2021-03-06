/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

 function numberToString(number){
    return number.toString(10)
 }

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

var n = 7;

 function increase(n){
     n++;
     return n;
 }

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

 function decrease(n){
     n--;
     return n;
 }

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

 function add(x, y){
return x + y;
 }


/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

 function subtract(x, y){
     return x - y;
 }

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

 function multiply(x, y){
     return x * y;
 }

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

 function divide(x, y){
     return x/y;
 }

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

 function square(x){
     return x * x;
 }


/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

function calculate(operation, x, y){
//    console.log(operation)
if (operation === "add") {
    var sum = x+y;
    console.log(x + " + " + y + " = " + sum)
return sum
}else if (operation === "subtract") {
    var difference = x-y;
    console.log(x + " - " + y + " = " + difference)
return difference 
}else if (operation === "multiply"){
    var product = x*y;
    console.log(x + " * " + y + " = " + product)
return product
}else if(operation === "divide"){
    var quotient = x/y;
    console.log(x + " / " + y + " = " + quotient)
return quotient
    }
}

calculate("add", 2, 3)

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

 function isGreaterThan(a, b){
    return a > b;
 }

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

function isLessThan(a, b){
    return a < b;
}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

 function  areEqual(a, b){
     return a === b;
 }

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

function minimum(x, y){
    if(x < y){
        return x; 
    }else{
        return y;
    }
}

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

 function maximum(x, y){
     if(x > y){
        return x;
     }else{
         return y;
     }
 }

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

function isEven(n){
    if(n % 2 === 0){
        return true;
    }else{
        return false;
    }
  }

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

 function isOdd(n){
     if(n % 2 === 0){
         return false;
 }else{
     return true;
    }
 }

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

 function letterGrade(score, total){
     var finalGrade = (score/total)*100
if(finalGrade >= 90){
    return "A";
}else if(finalGrade >= 80){
    return "B";
}else if(finalGrade >= 70){
    return "C";
}else if(finalGrade >= 60){
    return "D";
}else if(finalGrade <= 59){
    return "F";
    }
}


/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */
 
// function incrementReviews(restaurant){
//     if(awesomeEatery.reviews){
//     }
//     return restaurant++;
//     }
    
/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

function combine(word1, word2){
var sum = word1 + word2;
console.log(word1 + " " + word2)
}

// }
/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

