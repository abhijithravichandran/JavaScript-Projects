

var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

var cancelpopup = document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault();
    popupbox.style.display = "none";
    popupoverlay.style.display = "none";

})

// select container, book-title-input,book-author-input,book-description-input

var container = document.querySelector(".container"); // .className 
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");
var form = document.getElementById("FillUpForm");

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container"); // This part, allows the css to apply on this...
    div.innerHTML = `<h2>${booktitleinput.value}</h2><h3>${bookauthorinput.value}</h3><p>${bookdescriptioninput.value}</P><button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    form.reset();
    popupbox.style.display = "none";
    popupoverlay.style.display = "none";


})
function deletebook(event){
    event.target.parentElement.remove()
}