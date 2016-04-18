$("#sub").on("click", function(e){
  e.preventDefault();
  var senddata = $("#form").serialize();  

  $.ajax({  
    url:'/users',  
    data: senddata,  
    method:'POST',  
    dataType:'json',  
    success: function(data, textStatus, jqXHR){
      localStorage.setItem('currentdata', JSON.stringify(data));
      console.log(localStorage.getItem('currentdata'));
      //$("#usertable > tbody").empty();
      $("#tbody").children().remove()
      var resdata = "";

      for(var i = 0; i< data.length; i++){
        resdata+= "<tr>";
        resdata+= "<td>" + data[i]["name"] + "</td>";
        resdata+= "<td>" + data[i]["age"] + "</td>";
        resdata+= "<td>" + data[i]["favourites"]["cities"] + "<br>";
        resdata+= data[i]["favourites"]["times"] + "</td>";
        resdata+= "</tr>";
      }
      $("#usertbody").after(resdata);
    }
  });  
}); 

$('#namesort').on("click", function(e){
  e.preventDefault();

  var data = JSON.parse(localStorage.getItem('currentdata'));
  console.log(data);
  data.sort(function(a,b){
    if (a.name > b.name){
      return 1;
    }
    if (a.name < b.name){
      return -1;
    }
    return 0;
  });

  var retdata = JSON.parse(data);

  $("#usertable > tbody").empty();

  for(var i = 0; i< data.length; i++){
    resdata+= "<tr>";
    resdata+= "<td>" + data[i]["name"] + "</td>";
    resdata+= "<td>" + data[i]["age"] + "</td>";
    resdata+= "<td>" + data[i]["favourites"]["cities"] + "<br>";
    resdata+= data[i]["favourites"]["times"] + "</td>";
    resdata+= "</tr>";
  }
  $("#usertbody").after(resdata);
}); 

$('#agesort').on("click", function(e){
  e.preventDefault();

  var data = localStorage.getItem("currentdata");
  console.log(data);
}); 

function compare(a, b){
  return a - b;
}