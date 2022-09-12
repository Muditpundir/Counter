const value = document.querySelector("span");

const btns = document.querySelectorAll(".btn");

let count = 0;
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const lst = e.currentTarget.classList;
    if (lst.contains("b1")) {
      count--;
    } else if (lst.contains("b2")) {
      count = 0;
    } else count++;
    value.innerHTML = count;
    if (count < 0) value.style.color = "red";
    else if (count > 0) value.style.color = "green";
  });
});
