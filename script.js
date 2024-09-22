

function foo() { 
	if (true) { 
		var x = '1'; // Exist in function scope 

		console.log()
		
	} 
	console.log(x); 
 
}foo();



//////////////////////////
/// Variables and their scope
// Operators functionality
// Js?


console.log(3+"hello"); // answer is 3hello because it will consider 3 as a string
console.log(3+"3"); // answer is 33 because it will consider it as a string
console.log(3+3); // answer is 6 as it is a simple addition 

console.log(3-"hello");//it will give null value becasue we can not subtract from string


/////////////////

let age = '18';  // 'age' is a string

if (age == 18) {  // answer will be true because age 18 is equal to 18 and it will not consider the data type 
  console.log("You are an adult ");
}

let age2 = '18';  // 'age' is a string

if (age2 === 18) {  // answer will be false becasue this will also cheak tha data type 
  console.log("You are an adult.");
} else {
  console.log("This is not equal.");  // This will print
}

let age3='12';
if (age3 !== 18) { 
  console.log("You are not an adult ");
}

/////////////////
// example of var
var ali='fail'; // we dont use var in professional projects it is an old function now we use let instead of var 
ali='pass'; // we can reassign or change the value in var
console.log(ali); // answer is pass

// Example of let
let age4 = 25;
console.log(age4); // 25

age4 = 30;  // Reassigning the value
console.log(age4); // 30

if (true) {
    let age5 = 35;  // Block-scoped variable
    console.log(age5);  // ans 35 
}

console.log(age4);  // ans 30 the outer variable is not affected   this shows 


// Example of const
const name = "Hassan";
console.log(name); // answer hassan

// Trying to reassign will cause an error
// name = "Bob"; // Uncommenting this line will throw an error

if (true) {
    const name = "ali";  // Block-scoped, so this is allowed
    console.log(name);  // ali
}

console.log(name);  // Hassan (the outer variable remains unchanged)
////////////////

let age7='12';
if (age7 !=== 18) { 
  console.log("You are not an human  ");
}





//////////////

let iceCream = 3;
alert(typeof(iceCream))
console.log('hello'+3+'icecream'+5660)