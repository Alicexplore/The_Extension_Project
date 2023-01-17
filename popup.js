/////////////////////////////////////////////////////// create close a button  ///////////////////////////////////////////////////////

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

/////////////////////////////////////////////////////// close a button  /////////////////////////////////////////////////////////////

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

/////////////////////////////////////////////////////// checked symbol //////////////////////////////////////////////////////////////

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

/////////////////////////////////////////////////////// clicking on add button //////////////////////////////////////////////////////
var input = [];

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    // alert("Ready to write your next  ");
  } else {
    document.getElementById("myUL").appendChild(li);
    input.push(inputValue);
    localStorage.setItem("myInput", input.toString());
  }
  document.getElementById("myInput").value = "";

    

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  document.getElementById("newElement").addEventListener("click", newElement);
  localStorage.setItem(inputValue);
};
newElement();

window.onload = function () {
    var storedInput = localStorage.getItem("myInput");
    if (storedInput) {
      input = storedInput.split(",");
      for (var i = 0; i < input.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = input[i];
        li.addEventListener("click", checked);
        console.log("onload,checked")
        var span = document.createElement("span");
        span.innerHTML = "x";
        span.addEventListener("click", deleteToDo);
        console.log("onload, delete")
        li.appendChild(span);
        ul.appendChild(li);
      }
    }
  };





