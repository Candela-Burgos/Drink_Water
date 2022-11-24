const smallGlasses = document.querySelectorAll(".small-glass");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remainder = document.getElementById("remainder-liters");

function updateBigGlass() {
  const fullGlasses = document.querySelectorAll(".small-glass.full").length;
  const totalGlasses = smallGlasses.length;

  if (fullGlasses === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullGlasses / totalGlasses) * 330}px`;
    percentage.innerText = `${(fullGlasses / totalGlasses) * 100}%`;
  }

  if (fullGlasses === totalGlasses) {
    remainder.style.visibility = "hidden";
    remainder.style.height = 0;
  } else {
    remainder.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullGlasses) / 1000}L`;
  }
}

updateBigGlass();

function highlightGlasses(index) {
  if (index === 7 && smallGlasses[index].classList.contains("full")) {
    index--;
  } else if (
    smallGlasses[index].classList.contains("full") &&
    !smallGlasses[index].nextElementSibling.classList.contains("full")
  ) {
    index--;
  }

  smallGlasses.forEach((glass, index2) => {
    if (index2 <= index) {
      glass.classList.add("full");
    } else {
      glass.classList.remove("full");
    }
  });

  updateBigGlass();
}

smallGlasses.forEach((glass, index) => {
  glass.addEventListener("click", () => highlightGlasses(index));
});
