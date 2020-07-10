var display = document.getElementById("textview");

function insert(num) {
  display.textContent += num;
}

function clean() {
  display.textContent = "";
}

function equals() {
  var exp = eval(display.textContent);
  if (exp) {
    display.textContent = exp;
  }
}

function back() {
  var str = display.textContent;
  display.textContent = str.substring(0, str.length - 1);
}
