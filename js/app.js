'use strict'



/////////////// 7 QUESTIONS ///////////////


while (true) {
    var car = prompt('do i love bmw ?');

    if (car.toLowerCase() == "yes" || car.toLowerCase() == "y") {
       // console.log('true')
        alert('true');
        score++;
        break;
    }
    else if (car.toLowerCase() == "no" || car.toLowerCase() == "n") {
       // console.log('i dont like marcedes so think again')
        alert('i dont like marcedes so think again');
        break;
    }
}
while (true) {
    var  bff = prompt('is obay my bff ?');

    if (bff.toLowerCase() == "yes" || bff.toLowerCase() == "y") {
        // console.log('yes')
        alert('true');
        score++;
        break;
    }
    else if (bff.toLowerCase() == "no" || bff.toLowerCase() == "n") {
      // console.log('he is')
        alert('he is');
        break;
    }
}
while (true) {
    var  job = prompt('i want to be software developer ?');

    if (job.toLowerCase() == "yes" || job.toLowerCase() == "y") {
       //console.log('true its my dream')
        alert('true its my dream');
        score++;
        break;
    }
    else if (job.toLowerCase() == "no" || job.toLowerCase() == "n") {
      // console.log("nope i want")
        alert("nope i want");
        break;
    }
}
var getName = null;

while (getName === null || !isNaN(getName)){
  getName = prompt("What is your name ? ");

  if (getName === null || !isNaN(getName)){
    alert("Invalid name, please try again");
  }else{
    alert("Hello " + getName);
  }
}


/////////////// FIND MY FRUIT ///////////////
var ct = 0;
var flag = false;
while (ct < 6){
    // Init fruit array
    var fruits = ["banana", "orange", "apple", "mango"];
    // Ask user insert fruit
    var find = prompt('think of my fav fruits');
 
    // Check and find fruit if exist
    for(var i = 0 ; i < fruits.length; i++){
        if( fruits[i] == find ) {
            alert('You are correct');
            flag = true;
            score++;
            break;
        }
    }
    // Quit loop if correct
    if (flag == true) {
        break;
    }
    // On fail print all fruits
    if(ct == 5) {
        alert(fruits)
    }
    else {
        // If input wrong show message
        alert("Please try again");
    }

    ct++;
}











/////////////// GUESS MY NUMBER ///////////////
for (var i = 0 ;i <4 ; i++){
    var guess = prompt('guess a numbe between 1 to 10');
    var mynum = 6;
    if(guess > mynum){
        alert('to high')
    }
    if(guess < mynum){
        alert('to low')
    }
    if(guess == mynum){
        alert('correct');
        score++;
        break;
    }
    if(i == 3){
        alert('the correct answer is ' + mynum);
    }
}
alert('ur score is ' + score + ' out of 7 ');

