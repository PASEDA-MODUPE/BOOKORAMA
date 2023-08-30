document.title ="BOOKORAMA"
const ul = document.querySelector("ul")
console.log(ul)


ul.addEventListener("click", function(e) {
  const li = e.target.parentElement
  if (e.target.className === "delete") {

  ul.removeChild(li)
 
  }
});
const form = document.querySelector("#input-form");

const input = document.getElementById("book-input");

form.addEventListener("submit", (e) =>{


  const value = input.value
  if (value === "") {
   newprompt =  prompt("pls enter your book")
  throw(error);
    
  }

  
const li =document.createElement("li")
const bookName=document.createElement("span");
const bookTitle  =document.createElement("span");

 bookName.classList.add ("name")
 bookTitle.classList.add  ("delete")



bookName.textContent = value; 
bookTitle.textContent = "delete"

li.appendChild(bookName);
li.appendChild(bookTitle);

ul.appendChild(li)
input.value = ""
  e.preventDefault();
})





