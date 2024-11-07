var myForm = document.getElementById("myForm");
var myInput = document.getElementById("myInput");
var myItem = document.getElementById("myItem");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  createItem(myInput.value);
});

function createItem(inputItems) {
  var items = `<li>${inputItems}<button onclick="deleteElement(this)">Delete</button> <button onclick="doneElement(this)">Done</button></li>`;
  myItem.insertAdjacentHTML("beforeend", items);
  myInput.value = "";
  myInput.focus();
}
function deleteElement(ElementToDelete) {
  ElementToDelete.parentElement.remove();
}

function doneElement(item) {
  deleteElement(item);
  var item = `<li>[^_^]</li>`;
  myItem.insertAdjacentHTML("beforeend", item);
  myInput.value = "";
  myInput.focus();
}
