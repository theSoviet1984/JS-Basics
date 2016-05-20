//////////////////PROBLEM 1////////////////////
var name= "Tyler";
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

 var isTyler =function (name){
 	if(name==="Tyler"){
 		
 		return true;
 		}
 		else {
 			return false;
 		}
 	}
 
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.
function getName(){
	var name= prompt("What is your name?")
	return name;
}

  //Code Here


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.
function welcome(){
	alert("Welcome, "+getName())
}
  
  //Code Here


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //a parameter is the label of the possible data or dataset that could be used. 
  //arguments are invoked//Answer Here


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?
//0,null, undefined, false, "",NaN

  //Answer Here
//boolean();


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
  function myName(name){
  	return "Jerad";
  }


//Now save the function definition of myName into a new variable called newMyName

  //Code Here
  var newMyName=myName

//Now alert the result of invoking newMyName

alert(newMyName());

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  function outerFn(){
  return function(){
  return "Jerad";
  }
  }//Code Here

//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn=outerFn();//Code Here

//Now invoke innerFn.
innerFn();
