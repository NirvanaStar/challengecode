$("#sub").on("click", function(){
  var data = $("#form").serialize;  

  $.ajax({  
    url:'/users',  
    data: data,  
    method:'POST',  
    dataType:'json',  
    success: function(data, textStatus, jqXHR){
      console.log(data);
    }
  });  
});  
                

/*
$('#sub').click(function(){
  console.log("submit click");
  var name = $("#name").val();
  var agefrom = $("#agefrom").val();
  var ageto = $("#ageto").val
  var cities = $("#city").val();
  var times = "1:0000";

  $("#form").submit();
});*/

