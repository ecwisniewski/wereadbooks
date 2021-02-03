/*document.addEventListener("keydown",function(event) {
  console.log(event);
  setTimeout(textAnimation(),1000)});
*/


textAnimation();

pollResults = document.querySelector(".poll-results");
//alert(pollResults.innerHTML);

pollForm = document.forms["pollform"];
var radios = pollForm.elements["myradio"];
pollForm.elements["send"].onclick = function() {
  //alert("clicked");
  for(var j = 0; j<radios.length; j++) {
    if(radios[j].checked) {
       pollResults.querySelector("p").innerText = "You selected " + radios[j].value +"!";
       pollResults.classList.remove("invisible");
       pollForm.classList.add("invisible");
    }
  }
}

  for(var i = 0; i< radios.length; i++) {
    radios[i].onclick = function() {
        //alert(this.value);
        for(var j = 0; j<radios.length; j++) {
          if(this.value != radios[j].value) {
            radios[j].checked = false;
          }
        }
    }
  }

function removeInvisible(item) {
  item.classList.remove("invisible");
}
function textAnimation() {

    setTimeout(function() {
      document.querySelector("h1").innerHTML = "Love To Read";
    }, 3000);
    setTimeout(function() {
      document.querySelector("h1").innerHTML = "We Read Books";
    }, 5000);
    setTimeout(textAnimation,5000);
}
