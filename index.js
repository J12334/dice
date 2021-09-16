var rn1 = Math.floor(Math.random() * 6) + 1;

var st = "dice" + rn1 + ".png";

var ris = "images/" + st;

var im1 = document.querySelectorAll("img")[0];

im1.setAttribute("src" , ris);


var rn2 = Math.floor(Math.random() * 6) + 1;

var st2 = "dice" + rn2 + ".png";

var ris2 = "images/" + st2;

var im2 = document.querySelectorAll("img")[1];

im2.setAttribute("src" , ris2);


if(rn1 > rn2){

   document.querySelector("h1").innerHTML = "✨Player 1 Wins !";


}else if(rn2 > rn1){
   
   document.querySelector("h1").innerHTML = "✨Player 2 Wins !";
   
}else{
  
   document.querySelector("h1").innerHTML = "It's a draw 🤜🤛"; 

}