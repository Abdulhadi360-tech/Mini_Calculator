let display = document.querySelector("#display");

let keys = document.querySelectorAll(".btn");
let input = "";
display.value = input;
for (let key of keys) {
  key.addEventListener("click", (e) => {
    let button = e.target.innerHTML;

    if (button === "AC") {
      input = "";
    } else if (button === "x") {
      // Replace "x" with "*" for multiplication
      const lastChar = input.slice(-1);
      if ("+-*/".includes(lastChar)) return; // Prevent double operators
      input += "*";
    } else if (button === "=") {
      try {
        input = eval(input).toString();
      } catch (error) {
        input = "Error";
      }
    } else if ("+-*/".includes(button)) {
      const lastChar = input.slice(-1);
      if ("+-*/".includes(lastChar)) return; // Prevent double operators
      input += button;
    } else {
      input += button;
    }
    display.value = input;
  });
}
