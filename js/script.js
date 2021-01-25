function ToDoList() {
  this.items = {};
  this.currentId = 0;
}

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

let firstList = new ToDoList();

// let item = new Item("wash car", "go outside and wash car");

// firstList.addItem(item);

// console.log(firstList.items[0])
// firstList.items[0].done = true
// console.log(firstList.items[0])

$(document).ready(function() {
  $("form").click(function(event) {
    event.preventDefault();
    console.log("submit");
  });
});