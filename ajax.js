var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

var xhrbtn = document.querySelector("#xhr");
var fetchbtn = document.querySelector("#fetch");
var quote = document.querySelector("#quote");

xhrbtn.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200){
      quote.innerHTML = JSON.parse(XHR.responseText);
    }
  }
  
  XHR.open("GET", url);
  XHR.send();
});

fetchbtn.addEventListener("click", function(){
  fetch(url)
  .then(function(res){
    return res.json();
  })
  .then(function(data){
    quote.innerText = data[0];
  });
});

$("#jquery").click(function(){
  $.getJSON(url, function(){
    console.log("Success");
  })
  .done(function(data){
    quote.innerText = data[0];
  });
});

$("#axios").click(function(){
  axios.get(url)
  .then(function(res){
    quote.innerText = res.data[0];
  });
});