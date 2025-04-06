let currentPlayer = "X";
const winPattern = ["123", "159", "147", "258", "369", "357", "456", "789"];
let xPattern = [];
let oPattern = [];
let isWin = false;
const locs = document.querySelectorAll(".loc");
const toaster = document.getElementById("toaster");
locs.forEach(loc => {
  loc.addEventListener("click", function () {
    if (!isWin && !this.dataset.isfilled) {
      if (currentPlayer === "X") {
        this.classList.add("X");
        xPattern.push(this.id[3]);
        isWin = checkWin(winPattern, xPattern);
        if (isWin) {
          toaster.classList.remove("hidden");
          toaster.innerText = "Player X Wins!";
          console.log("Toasted");
        }
        currentPlayer = "O";
      } else if (currentPlayer === "O") {
        this.classList.add("O");
        oPattern.push(this.id[3]);
        isWin = checkWin(winPattern, oPattern);
        if (isWin) {
          toaster.classList.remove("hidden");
          toaster.innerText = "Player O Wins!";
        }
        currentPlayer = "X";
      }
      this.dataset.isfilled = true;
    }
  });
});

// Functions
const checkWin = (pattern, arr) => {
  let counter = 0;
  let flag = false;
  pattern.forEach(item => {
    for (let i = 0; i < item.length; i++) counter = arr.includes(item[i]) ? counter + 1 : counter;
    if (counter === 3) flag = true;
    counter = 0;
  });
  if (flag) return true;
  else return false;
};
