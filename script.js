let btn = document.querySelector("#change");
let text = document.querySelector("#colname");
let heading = document.querySelector("#color");
let bodycol;
// function alertt(){
//     document.body.style.backgroundColor="#000";
// }
const colorMaker = () => {
  let color = "1234567890ABCDEF";
  let has = "#";
  for (let i = 0; i < 6; i++) {
    has = has + color[Math.floor(Math.random() * 16)];
  }
  return has;
};
function colorChange() {
  bodycol = document.body.style.backgroundColor = colorMaker();
  document.body.style.backgroundColor = bodycol;
  btn.style.backgroundColor = bodycol;
  heading.style.backgroundColor = bodycol;
  text.innerText = colorMaker();
}

btn.addEventListener("click", colorChange);
text.addEventListener("click", showToast);
function showToast() {
  Toastify({
    text: "Copied",
    className: "info",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
  navigator.clipboard.writeText(text.innerText);
}
