// count

let counter = 0;

//Selection of classes or id

const btns = document.querySelector(".btn");
const result = document.querySelector(".result");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const ifClassExist = e.currentTarget.classList;
    if (ifClassExist.contains("increase")) {
      counter++;
    } else if (ifClassExist.contains("decrease")) {
      counter--;
    } else {
      counter = 0;
    }
  });

  result.textContent = counter;
});
