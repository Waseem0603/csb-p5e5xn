let output = document.getElementById("input");
const ac = document.getElementById("ac");
const del = document.getElementById("del");
const solve = document.getElementById("equal");
ac.onclick = () => {
  output.value = "";
};
del.onclick = () => {
  output.value = output.value.slice(0, -1);
};
function display(val) {
  output.value += val;
  return val;
}
solve.onclick = () => {
  const x = output.value;
  const y = eval(x);
  output.value = y;
};
