/*$(document).ready(function(){
  $('#sub').click(function(){
    $('#form').submitForm({
      url: "/users",
      data:{
        name = $("#name").val(),
        agefrom = $("#agefrom").val(),
        ageto = $("#ageto").val(),
        cities = $("#city").val(),
        times = "1:0000"
      },
      dataType:'json',
      type: 'POST'
    }).submit();
  })
});*/



$('#sub').click(function(){
  console.log("submit click");
  var name = $("#name").val();
  var agefrom = $("#agefrom").val();
  var ageto = $("#ageto").val
  var cities = $("#city").val();
  var times = "1:0000";

  $("#form").submit();
});

