const ul = document.querySelector("ul");
const input = document.getElementById("taskInput");
let itemsArray = JSON.parse(localStorage.getItem("items")) || [];

itemsArray.forEach(addTask);

function addRemoveBtn(list) {
  let span = document.createElement("SPAN");
  span.textContent = "\u00D7";
  span.onclick = function () {
    let div = span.parentElement.textContent;
    let i = itemsArray.indexOf(div.slice(0, div.length - 1));
    span.parentElement.style.display = "none";
    itemsArray.splice(i, 1);
    localStorage.setItem("items", JSON.stringify(itemsArray));
  };
  list.appendChild(span);
}

function addTask(text) {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
  addRemoveBtn(li);
}

function add() {
  if (input.value !== "") {
    itemsArray.push(input.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    addTask(input.value);
    input.value = "";
  } else {
    alert("Write something!");
  }
}
