$(document).ready(function() {
  $("form#some-form").submit(function(event) {
    var userInput1 = $("#input1").val();
    var userInput2 = $("#input2").val();
    console.log(userInput1);
    var newArray = [];

    for (var index = 1; index <= userInput1; index += userInput2) {
      newArray.push();
    }

    console.log(newArray);

    event.preventDefault();
  });
});
