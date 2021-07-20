function posttime() {
 var d = new Date();
var h = d.getHours();    
var m = d.getMinutes();
var s = d.getSeconds();
  var res = h + ':' + m + ':' + s;
  postMessage(res);
  setTimeout("posttime()",500);
}

posttime();
