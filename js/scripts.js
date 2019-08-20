$(document).ready(function() {
  $("form#some-form").submit(function(event) {
    var userInput1 = parseInt($("input#input1").val());
    var userInput2 = parseInt($("input#input2").val());

    var newArray = [];

    for (var index = userInput2; index <= userInput1; index += userInput2) {

      newArray.push(index);
    }

    console.log(newArray);

    event.preventDefault();
  });
});
