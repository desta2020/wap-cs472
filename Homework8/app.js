
/* QUESTION 6 */
const countObject = (function(){
    var counter = 0;
    function add() {
        counter += 1;
    }
    function reset() {
        counter = 0;
    }
    return {

        add: add,
        reset: reset,
        counter: function() {
            return counter;
        }
    }

})();
console.log('Using object approach');
countObject.add();
console.log("count " + countObject.counter());
countObject.reset();
console.log("count " + countObject.counter());


/* QUESTION 7 */
/* 
The free variable is counter.
A free variable is a variable referred to by a function that is not one of its parameters or local variables.
*/


/* QUESTION 8 */
const make_adder = function (val) {
    let counter = 0;
    return function () {
        counter += val;
        console.log(counter)
    }
    
};

console.log('Make adder');
const add5 = make_adder(5);
add5(); add5(); add5();
const add7 = make_adder(7);
add7(); add7(); add7();




/* QUESTION 9 */

/*
Using the module pattern (IIFE) can remove names from the global namespace. 
Modules help to to avoid declaring global variables/functions. Modules enable us do some encapsulation.
*/

/* QUESTION 10
*/

const Employee = (function(){
    let name = "default";
    let age = "default";
    let salary = "default";
    function getAge(){
        return age;
    }
    function getSalary(){
        return salary;
    }
    function getName(){
        return name;
    }
    return {
        setAge : function(newAge){
            age = newAge;
        },
        setSalary : function(newSalary){
            salary = newSalary;
        },
        setName: function(newName){
            name = newName;
        },
        increaseSalary: function (percentage){
            salary += getSalary()* 0.01 * percentage ;
        },
        incrementAge: function(){
            age++;
        },
        getEmployeeInfo: function(){
            return `\nname: ${getName()}\nage: ${getAge()}\nsalary: ${getSalary()}`
        },
        getName: function(){
            return getName();
        }
    }
})();
//Add new Employee
Employee.setName("John Smith");
Employee.setAge(25);
Employee.setSalary(110000);
console.log(`Employee Information is:\n${Employee.getEmployeeInfo()}`);

// Update Employee information
Employee.increaseSalary(20);
Employee.incrementAge();
console.log(`\nUpdate Employee Information is:\n${Employee.getEmployeeInfo()}`)
/* Question 11 */
// adding address functionality to Employee object
Employee.address = "North 4th street Maharishi University Building 144";
Employee.getAddresss = function(){
    return this.address;
}

Employee.setAddress = function(newAddress){
    this.address = newAddress;
}




//Employee address information is
console.log(`\n${Employee.getName()}'s address is: ${Employee.getAddresss()}`);

//Update address information of employee is
Employee.setAddress("North 4th street Maharishi University Building 143");
console.log(`\n${Employee.getName()}'s new address is: ${Employee.getAddresss()}`);
// /* Question 11 */
// Employee.address = ""; // If using a constructor, add new property by Employee.prototype.address = ""
// Employee.getAddress = function () {
//   return Employee.address;
// };
// Employee.setAddress = function (newAddress) {
//   Employee.address = newAddress;
// };

// Employee.setAddress("Fairfield");
// console.log(" Address: " + Employee.address);
// console.log(" Address: " + Employee.getAddress());
