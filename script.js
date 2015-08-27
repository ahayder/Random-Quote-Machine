function quote(){
  var quotes = [
    ["It is more noble to give yourself completely to one individual than to labor diligently for the salvation of the masses.", "Dag Hammarskjold, Sec. Gen. of the UN"],
    ["There are two types of people in this world. Those that enter a room and say 'Here I am!' and those that enter a room and say 'There you are!'.", "Unknown"],
    ["Maps are a way of organizing wonder.", "Edward Tufte"],
    ["For you will look smart and feel ignorant and the patient will not know which day it is for you and you will pretend to be smart out of ignorance.", "John Stone, Gaudeamus Igitur"],
    ["Knowledge keeps about as well as fish.", "Unknown"],
    ["Knowledge keeps about as well as fish.", "Alfred North Whitehead"],
    ["Judge yourself in the first place", "Ali Hayder"],
    ["Sometimes life is going to hit you in the head with a brick. Don't lose faith.", "Steve Jobs"]
  ];
  
  var ran = Math.floor(Math.random() * quotes.length);
  
  return quotes[ran];
}
var init = quote();

$(document).ready(function(){
  var anchor = "<a target='_blank' class='btn btn-info btn-sm' href='https://twitter.com/intent/tweet?text=" + init[0] +" -- by "+ init[1]+"'><i class='fa fa-twitter'></i> Tweet It</a>";
  $("blockquote").append(anchor);
  $("#quote").text(init[0]);
  $("#someone-famous").text(init[1]);
  $("button").click(function(){
    var q = quote();
    $("#quote").text(q[0]);
    $("#someone-famous").text(q[1]);
  var anchor = "<a target='_blank' class='btn btn-info btn-sm' href='https://twitter.com/intent/tweet?text=" + g[0] +" -- by "+ g[1]+"'><i class='fa fa-twitter'></i> Tweet It</a>";
    $("blockquote").append(anchor);
  });
});
