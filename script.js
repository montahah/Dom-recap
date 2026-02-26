let activeList = [];
let deadList = [];

let total = document.getElementById("total");
let active = document.getElementById("active");
let dead = document.getElementById("dead");

const allFilterBtn = document.getElementById("all-filter-btn");
const activeFilterBtn = document.getElementById("active-filter-btn");
const deadFilterBtn = document.getElementById("dead-filter-btn");

const mainContainer = document.querySelector("main");
const allCardSection = document.getElementById("all-cards");
const filterSection = document.getElementById("filterCards");

// console.log(allFilterBtn, activeFilterBtn, deadFilterBtn);

function toggleStyle(id) {
  allFilterBtn.classList.remove("bg-black");
  activeFilterBtn.classList.remove("bg-black");
  deadFilterBtn.classList.remove("bg-black");

  allFilterBtn.classList.add("bg-gray-400", "text-white");
  activeFilterBtn.classList.add("bg-gray-400", "text-white");
  deadFilterBtn.classList.add("bg-gray-400", "text-white");

  const selected = document.getElementById(id);
  selected.classList.remove("bg-gray-400");
  selected.classList.add("bg-black");
}

// Count Function
function calculateCount() {
  total.innerText = allCardSection.children.length;
}
calculateCount();

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("active-btn")) {
    const parenNode = event.target.parentNode.parentNode;
    const plantName = parenNode.querySelector(".plantName").innerText;
    const latinName = parenNode.querySelector(".latinName").innerText;
    const indicate = parenNode.querySelector(".indicate").innerText;
    const water = parenNode.querySelector(".water").innerText;
    const status = parenNode.querySelector(".status").innerText;
    const note = parenNode.querySelector(".note").innerText;

    const cardInfo = {
      plantName,
      latinName,
      indicate,
      water,
      status,
      note,
    };
    // console.log(cardInfo);

    const plantExist = activeList.find(
      (item) => item.plantName == cardInfo.plantName,
    );
    if (!plantExist) {
      activeList.push(cardInfo);
    }
    renderActive();
  }
  // else if(){

  // }
});

function renderActive() {
  // make the filterSection empty every time
  filterSection.innerHTML = "";

  for (let item of activeList) {
    console.log(item);

    let div = document.createElement("div");
    div.className =
      "flex justify-between border-2 border-gray-400 p-10 mt-5 rounded-lg shadow";
    div.innerHTML = `
    <div class="space-y-3">
            <h2 class="plantName text-3xl font-medium">Plant Name 1</h2>
            <p class="latinName">Latin Name</p>
            <div class="flex gap-3">
              <p class="indicate px-3 py-1 rounded bg-gray-300">
                Bright Indicate
              </p>
              <p class="water px-3 py-1 rounded bg-gray-300">Week</p>
            </div>
            <p class="status px-2 py-1 rounded bg-gray-300 text-center">
              Not Applicable
            </p>
            <p class="note font-medium text-gray-600">New leaf want to grow</p>
            <div class="flex gap-4">
              <button
                class="font-bold text-green-500 border-2 border-gray-400 px-5 py-2 rounded cursor-pointer">
                Active
              </button>
              <button
                class="font-bold text-red-500 border-2 border-red-400 px-5 py-2 rounded cursor-pointer">
                Dead
              </button>
            </div>
    
    `;
  }
}
