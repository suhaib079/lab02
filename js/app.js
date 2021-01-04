'use strict'


while (true) {
    var myLocation = prompt('do i live in amman ?');

    if (myLocation.toLowerCase() == "yes" || myLocation.toLowerCase() == "y") {
     // console.log('true thats where i live')
        alert('true thats where i live');
        break;
    }
    else if (myLocation.toLowerCase() == "no" || myLocation.toLowerCase() == "n") {
       // console.log('wrong i live in amman')
        alert("wrong i live in amman");
        break;
    }
}
while (true) {
    var major = prompt('am i meachincal enginner ?');

    if (major.toLowerCase() == "yes" || major.toLowerCase() == "y") {
       // console.log('yup')
        alert('yup');
        break;
    }
    else if (major.toLowerCase() == "no" || major.toLowerCase() == "n") {
       // console.log('nope i am a meachnical enginner')
        alert('nope i am a meachnical enginner');
        break;
    }
}
while (true) {
    var car = prompt('do i love bmw ?');

    if (car.toLowerCase() == "yes" || car.toLowerCase() == "y") {
       // console.log('true')
        alert('true');
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