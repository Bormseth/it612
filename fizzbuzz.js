// Bjorn Ormseth
// This file contains a loop for the FizzBuzz problem. For every integer i from 1 to 100,
// the program will print "Fizz" if i is a multiple of 3, "Buzz" if i is a multiple of 5, 
// or "FizzBuzz" if i is a multiple of both. Otherwise, the value of i is printed as is.

// iterate through integers 1 to 100 
for (let i = 1; i <= 100; i++) {
    // branch if i is a multiple of 3 or 5
    if ((i % 3 == 0) || (i % 5 == 0)) {
        // if multiple of 3 and 5 (15)
        if (i % 15 == 0) console.log("FizzBuzz");
        
        // else if multiple of just 3
        else if (i % 3 == 0) console.log("Fizz");
        
        // else if multiple of just 5
        else if (i % 5 == 0) console.log("Buzz");
    }
    // otherwise, print i as is 
    else {
        console.log(i);
    }
}