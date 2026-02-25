let activeList = [];
let deadList = [];

let total = document.getElementById("total");
let active = document.getElementById("active");
let dead = document.getElementById("dead");

const allFilterBtn = document.getElementById("all-filter-btn");
const activeFilterBtn = document.getElementById("active-filter-btn");
const deadFilterBtn = document.getElementById("dead-filter-btn");

// console.log(allFilterBtn, activeFilterBtn, deadFilterBtn);

function toggleStyle(id) {
  allFilterBtn.classList.remove("bg-black");
  activeFilterBtn.classList.remove("bg-black");
  deadFilterBtn.classList.remove("bg-black");

  allFilterBtn.classList.add("bg-gray-400", "text-white");
  activeFilterBtn.classList.add("bg-gray-400", "text-white");
  deadFilterBtn.classList.add("bg-gray-400", "text-white");
}

const mainContainer = document.querySelector("main");

const allCardSection = document.getElementById("all-cards");

// Count Function
function calculateCount() {
  total.innerText = allCardSection.children.length;
}
calculateCount();
