function display(fun1) {
  var v = document.getElementById('Result1');
  v.value += fun1;
}
function Clear() {
  var p = document.getElementById('Result1');
  p.value = '';
}
function Back() {
  var e = document.getElementById('Result1');
  e.value = e.value.slice(0, -1);
}
function Result() {
  var num1 = document.getElementById('Result1').value;
  var num2 = eval(num1);
  document.getElementById('Result1').value = num2;
}