var errors = null;

//to reset the document
const inputItem = document.getElementById("input-item");
inputItem.value = null;

//function to check is data is null or is it valid.
function handleClick() {
  //target user's input
  const inputItem = document.getElementById("input-item");
  const value = inputItem.value;

  //check if there's value or not
  if (value) {
    errors = null;
    addElement(value);
  }
  if (!value) {
    errors = "Please input some value";
    addElement();
  }
}

// function to store data / error
function addElement(value) {
  //target elements in HTML doc
  const list = document.getElementById("all-items");
  const errorElement = document.getElementById("error-message");
  const inputItem = document.getElementById("input-item");

  //print error
  if (errors) {
    errorElement.innerText = errors.toString();
  }

  //print user's input in li form
  if (errors === null && value) {
    const newListItem = document.createElement("li");
    newListItem.classList.add("list-item");
    newListItem.appendChild(document.createTextNode(value));
    list.appendChild(newListItem);

    inputItem.value = null;
    errorElement.innerText = "";
  }
}
