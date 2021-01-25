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
    $("#listDisplay ol").append(`<li id="${value.id}"><input name="toDoItems" class="check" type="checkbox" ${value.done ? "checked" : ""}>${value['name']}<button class="remove">Remove</button></li>`)

  });
  $("li").each(function() {
    $(this).css("background-color", ($(this).children("input").is(":checked")) ? "green" : "inherit"); //leave selected boxes green after removing items
  });

  bindRemove();
  bindDone();
};



function bindRemove() {
  $("button.remove").click(function() {
    let idClicked = $(this).parent().attr("id");
    console.log(idClicked);
    firstList.remove(idClicked);
    drawListToHtml();
  });
}

function bindDone() {
  $(".check").click(function() {
    let checkedId = $(this).parent().attr("id");
    firstList.items[checkedId].done = ($(this).is(":checked")) //is will return true/false
    $(this).parent().css("background-color", ($(this).is(":checked")) ? "green" : "inherit");
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