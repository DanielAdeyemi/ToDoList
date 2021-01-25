function ToDoList() {
  this.items = {};
  this.currentId = 0;
}

let firstList = new ToDoList();

function Item(name, desc) {
  this.name = name;
  this.desc = desc;
  this.done = false;
}

ToDoList.prototype.addItem = function(item) {
  item.id = this.assignId();
  this.items[item.id] = item;
}

ToDoList.prototype.assignId = function() {
  sendId = this.currentId
  this.currentId += 1;
  return sendId;
}




// let item = new Item("wash car", "go outside and wash car");
// firstList.addItem(item);
function output(name, desc) {
  let item = new Item(name, desc);
  firstList.addItem(item);
}

function drawListToHtml() {
  $("#listDisplay ol").empty()

  Object.values(firstList.items).forEach(function(value) {
    $("#listDisplay ol").append(`<li>${value['name']}</li>`)
  });

};
//clear html ol
//iterate through ToDoList.items and refill ol


$(document).ready(function() {
  $("#listAdd form").submit(function(event) {
    event.preventDefault();
    let name = $("#name").val();
    let desc = $("#desc").val();
    output(name, desc);
    drawListToHtml();
    $("form")[0].reset();
  });
});