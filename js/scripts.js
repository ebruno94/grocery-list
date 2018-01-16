$(document).ready(function(){
  var items = [];
  var upperItems;

  // var check = function(item){
  //   if (upperItems.includes(item)){
  //
  //   }
  // }


  $("#formItem").submit(function(event){
    var currItem = $("#items").val();
    items.push(currItem);
    $("#soFar").append("<li>" + currItem + "</li>");
    $("document")

    event.preventDefault();
  });
  $("#sort").click(function(event){
    $("#soFar").text("");
    $("#sorted").text("");
    upperItems = items.map(function(item){
      return item.toUpperCase();
    });
    upperItems.sort();
    upperItems.forEach(function(upperItem){
      $("#sorted").append("<li>"+ upperItem + "</li>");

    });
    event.preventDefault();
  });
});
