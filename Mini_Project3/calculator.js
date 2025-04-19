console.log("hello !!!!!");
let display = document.querySelector("input");
let keys = document.querySelectorAll(".btn");
let input = "";
for (let key of keys) {
    key.addEventListener("click", (e) => {
        let button = e.target.innerHTML;
        if (button == "AC") {
            input = "";
            display.value = input;
        } else if (button == "x") {
            input= "*";
            display.value+= input;
        } else if (button == "=") {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error";
            }
        } else {
            
            display.value +=button
        }
    });
}
