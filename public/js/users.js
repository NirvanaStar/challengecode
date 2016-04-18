localStorage.setItem('order', "desc");

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

      // clear the current table
      $("#usertable > tbody").empty();

      var resdata = "";

      // create a new table
      for(var i = 0; i< data.length; i++){
        resdata+= "<tr>";
        resdata+= "<td>" + data[i]["name"] + "</td>";
        resdata+= "<td>" + data[i]["age"] + "</td>";
        resdata+= "<td>" + data[i]["favourites"]["cities"] + "<br>";
        resdata+= data[i]["favourites"]["times"] + "</td>";
        resdata+= "</tr>";
      }

      $("#usertbody").append(resdata);
    }
  });  
}); 

// sort by name
$('#namesort').on("click", function(e){
  e.preventDefault();

  var data = JSON.parse(localStorage.getItem('currentdata'));
  // order by asceding if current order is desc
  if (localStorage.getItem('order') == "desc"){
    localStorage.setItem('order', "asce");
    data.sort(function(a,b){
      if (a.name > b.name){
        return 1;
      }
      if (a.name < b.name){
        return -1;
      }
      return 0;
    });
  }

  else{
    localStorage.setItem('order', "desc");
    data.sort(function(a,b){
      if (a.name < b.name){
        return 1;
      }
      if (a.name > b.name){
        return -1;
      }
      return 0;
    });
  }
  
  $("#usertable > tbody").empty();

  var resdata = "";

  for(var i = 0; i< data.length; i++){
    resdata+= "<tr>";
    resdata+= "<td>" + data[i]["name"] + "</td>";
    resdata+= "<td>" + data[i]["age"] + "</td>";
    resdata+= "<td>" + data[i]["favourites"]["cities"] + "<br>";
    resdata+= data[i]["favourites"]["times"] + "</td>";
    resdata+= "</tr>";
  }
  $("#usertbody").append(resdata);
}); 

//sort by age
$('#agesort').on("click", function(e){
  e.preventDefault();

  var data = JSON.parse(localStorage.getItem('currentdata'));

  if (localStorage.getItem('order') == "desc"){
    localStorage.setItem('order', "asce");
    data.sort(function(a,b){
      if (a.age > b.age){
        return 1;
      }
      if (a.age < b.age){
        return -1;
      }
      return 0;
    });
  }

  else{
    localStorage.setItem('order', "desc");
    data.sort(function(a,b){
      if (a.age < b.age){
        return 1;
      }
      if (a.age > b.age){
        return -1;
      }
      return 0;
    });
  }
  
  $("#usertable > tbody").empty();

  var resdata = "";

  for(var i = 0; i< data.length; i++){
    resdata+= "<tr>";
    resdata+= "<td>" + data[i]["name"] + "</td>";
    resdata+= "<td>" + data[i]["age"] + "</td>";
    resdata+= "<td>" + data[i]["favourites"]["cities"] + "<br>";
    resdata+= data[i]["favourites"]["times"] + "</td>";
    resdata+= "</tr>";
  }
  $("#usertbody").append(resdata);
}); 

var citymessages = new Array(); 
citymessages[0] = "";
citymessages[1] = "LA";
citymessages[2] = "Boston";
citymessages[3] = "NewYork";  
citymessages[4] = "Chicago";
citymessages[5] = "Miami";

function cityMessageReveal() { 
  var messageindex = document.form.cities.selectedIndex;

  helpmsg = citymessages[messageindex];

  if (document.form.city.value == ""){
    document.form.city.value = helpmsg;
  }
  else{
    document.form.city.value += ", " + helpmsg;
  }
}

function timeMessageReveal(){
  var hour = document.form.hour.selectedIndex;
}

$('#times').timepicker();