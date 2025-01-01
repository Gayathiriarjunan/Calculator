var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popupbox")
var addpopupbutton=document.getElementById("add-popup-button")
addpopupbutton.addEventListener("click",function()
{
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
var cancle=document.getElementById("cancled")
cancle.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
function deleteinput(event){
    event.target.parentElement.remove()
   }
var container = document.querySelector(".container");
var addBookButton = document.getElementById("add-book");
var bookNameInput = document.getElementById("Book-Title-input");
var bookAuthorInput = document.getElementById("Book-Author-input");
var bookDescriptionInput = document.getElementById("book-des");
var popupoverlay = document.querySelector(".popup-overlay")// Select popup overlay
var popupbox = document.querySelector(".popupbox")// Select popup box
addBookButton.addEventListener("click", function(event) {
    event.preventDefault();

    // Create a new book container div
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `<h2>${bookNameInput.value}</h2>
    <h5>${bookAuthorInput.value}</h5>
    <p>${bookDescriptionInput.value}</p>
    <button onclick="deleteinput(event)" >delete</button>`
       
    // Append the new book container to the main container
    container.append(div);

    // Reset form fields
    bookNameInput.value = "";
    bookAuthorInput.value = "";
    bookDescriptionInput.value = "";
 

    // Hide popup
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});
