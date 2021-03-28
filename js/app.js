// console.log("java script is fun!");
// // var x=20;
// // console.log("the value of x="+x);

// // for(let i=0;i<=5;i++)
// // {
// //     for(let j=0;j<5;j++)
// //     {
// //         console.log(i+j );
// //     }

// // }
// // console.log("function declaration!");
// // function square(number)
// // {
// //     return number*number;
// // }
// // console.log("square of number 5 is:"+square(5));

// const square1=function(n){
// return n*n;
// }
// var m=square1(5);
// console.log("square1 of 5 is:"+m);
// console.log("factorial");
// function factorial(n){
// if(n==1)
// return 1;
// return n*factorial(n-1);
// }
// console.log(factorial(5));
// console.log("sum of two number");
// const num1 = parseInt(prompt('Enter the first number '));
// const num2 = parseInt(prompt('Enter the second number '));

// //add two numbers
// const sum = num1 + num2;

// // display the sum
// console.log(sum);
function sumTriple (x, y) {
    if (x == y) {
      return 3 * (x + y);
      } 
     else
     {
      return (x + y);
     }
   }
  console.log(sumTriple(10, 20));
  console.log(sumTriple(10, 10));