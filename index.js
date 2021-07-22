// Write your solution in this file!

//Declare a variable in global scope called customerName using the var keyword.
var customerName = 'bob';

//Write a function that accesses that global customerName variable, and uppercases it.
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
    return customerName
}

// setBestCustomer(): Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'. (Poor Bob.) Also, poor us, declaring a global variable from inside a function is one of those things we would never want to do normally, but is good for us to explore right now.
var bestCustomer;
function setBestCustomer() {
    bestCustomer = 'not bob'

}


//overwriteBestCustomer(): See the consequences of declaring a variable in global scope, by writing a new function called overwriteBestCustomer() that changes that bestCustomer variable.

function overwriteBestCustomer(name) {
    bestCustomer = name
} 


//leastFavoriteCustomer and changeLeastFavoriteCustomer(): Now declare a constant (using the const keyword) in global scope called leastFavoriteCustomer; be sure to assign it some initial value. Finally, write a function called changeLeastFavoriteCustomer() that attempts to change that constant - notice what JavaScript does when you try to change the constant.
const leastFavoriteCustomer = 'Josh';
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'john';
}
    