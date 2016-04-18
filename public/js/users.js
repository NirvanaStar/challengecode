$("#sub").on("click", function () {  
                var params = $("#form").serializeArray();  
                var j = {};  
                for (var item in params) {  
                    j[params[item].name] = params[item].value;  
                }  
  
                $.ajax({  
                    url:'/',  
                    data:JSON.stringify(j),  
                    type:'post',  
                    dataType:'json',  
                    headers:{  
                        Accept:"application/json",  
                        "Content-Type":"application/json"  
                    },  
                    processData:false,  
                    cache:false  
                }).done(function (data) {  
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

