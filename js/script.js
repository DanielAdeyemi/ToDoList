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

ToDoList.prototype.remove = function(id) {
  delete this.items[id];
  return true;
}

function output(name, desc) {
  let item = new Item(name, desc);
  firstList.addItem(item);
}

function drawListToHtml() {
  $("#listDisplay ol").empty()

  Object.values(firstList.items).forEach(function(value) {
    $("#listDisplay ol").append(`<li><input type="checkbox">${value['name']}<button id="${value.id}" class="remove">Remove</button></li>`)
  });
  bindRemove();
};

function bindRemove() {
  $("button.remove").click(function() {
    let idClicked = $(this).attr("id");
    firstList.remove(idClicked);
    drawListToHtml();
  });
}

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