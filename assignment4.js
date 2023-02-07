// problem 1: mindGame
// the function mindGame() takes a positive number as input.
// then it multiplies the input by 3, then add 10 and then divide by 2 and subtract 5 from the number.
// it then returns the resultant number

function mindGame(input) {
    // handling wrong type of input parameter
    if (typeof input != 'number') {
        return "please enter a valid number as input";
    }
    // edge case. if input is not positive number.
    if (input < 0) {
        return "please enter a positive number";
    }
    // took an output var to store result. initially assing value as input*3.
    let output = input * 3;
    // adding 10
    output += 10;;
    // dividing by 2
    output /= 2;
    // subtracting 5
    output -= 5;
    return output;
}

// problem 2 : even or odd
// the function evenOdd takes a string as input
// if input string has total even number of characters, it returns "even"
// for odd number of characters, it returns "odd"
function evenOdd(words) {
    // handling wrong type of parameter as input
    if (typeof words != "string") {
        return "please enter a valid string input";
    }
    // if words has even number of characters, it will return even
    if (words.length % 2 == 0) {
        return "even";
    }
    // words length is odd. so returning odd
    else {
        return "odd";
    }
}


// problem 3: is less or greater than seven
// the function takes a number as input and subtracts it from 7.
// if subtraction result is less than 7, return the result
// else return double of the input number
function isLGSeven(inputNumber) {
    // handling wrong type of paramert for input number
    if (typeof inputNumber != "number") {
        return "please enter a valid number as input";
    }
    let result = inputNumber - 7;
    if (result < 7) {
        return result;
    }
    else {
        return inputNumber * 2;
    }

}


//problem 4 - finding bad data
// bad data is negative numbers
// and good data is from 0 to any positive numbers
// the function takes an array of numbers as input
// it returns the total number of negative numbers i.e the bad data the array contains.
function findingBadData(numbers) {
    // handling wrong type of parameter as input 
    // if numbers is not an array, then returns a string output.
    if (Array.isArray(numbers) == false) {
        return "please take an array of numbers for input";
    }
    // var to store total no. of bad data
    let count = 0;
    // loop to traverse the input array
    for (let i = 0; i < numbers.length; i++) {
        // if curretn number is negative, increase the count
        if (numbers[i] < 0) {
            count++;
        }
    }
    return count;
}




// problem 5 - convert gems into diamond
// the function takes 3 input numbers as gems of 3 respective friends.
// then convert total no. of gems into diamonds.
function gemsToDiamond(gemsOfFreind1, gemsOfFreind2, gemsOfFreind3) {
    // handling wrong type for input parameters
    if (typeof gemsOfFreind1 != 'number' || typeof gemsOfFreind2 != 'number' || typeof gemsOfFreind3 != 'number') {
        return "please enter 3 valid numbers as input parameters";
    }
    // power of each friends gems
    let powerOfGems1 = 21;
    let powerOfGems2 = 32;
    let powerOfGems3 = 43;
    // converting gems into diamonds
    let totalDiamonds = gemsOfFreind1 * powerOfGems1 + gemsOfFreind2 * powerOfGems2 + gemsOfFreind3 * powerOfGems3;
    // if total no. of diamonds exceeds 2000, then subtract 2000 from it.
    if (totalDiamonds > (1000 * 2)) {
        totalDiamonds = totalDiamonds - 2000;
    }
    return totalDiamonds;
}




