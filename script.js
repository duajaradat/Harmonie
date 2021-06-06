
var name = prompt("what's your name ?")
if (name != null)

  document.write("<h3> You can Contact US to purchase items by E-mail </p>")

alert("Welcome to Our Beautiful World " + name)

//  var answer = prompt("Do you like OneLine Art");

//  if(answer == "yes") {
//    alert("please contact us to get a special gift")
//    } else{
//    alert("You will change your mind after see our masterpieces")  
//    }
//    console.log(answer)
// while (OneLineArt != "colorful pic" && OneLineArt != "black&white pic") {
//   OneLineArt = prompt("Again, please write of of the choices to join us: colorful pic , black&white pic")
// // }


var OneLineArt = prompt("Please Pick one to enter our Beautiful World: colorful pic , black&white pic ");

function oneline() {
  while (OneLineArt != "colorful pic" && OneLineArt != "black&white pic") {
    OneLineArt = prompt("Again, please write of of the choices to join us: colorful pic , black&white pic")
  }
  if (OneLineArt == "colorful pic" || OneLineArt == "black&white pic") {
    console.log(OneLineArt);

  }
    console.log(OneLineArt);
}
oneline();



var y = prompt("how many masterpieces do you want to see[maximam num is 3]?")

var onelineIMG = function () {
  var i = 0;
  while (i < y) {

    document.write("<img src='colorful.jpg'/>")
    i++;
  }
}
onelineIMG();














