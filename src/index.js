document.addEventListener("DOMContentLoaded", init);

function init(e) {
  const filterDogsButton = document.querySelector("#good-dog-filter");
  filterDogsButton.addEventListener("click", toggleFilterDogs);
  getDogs().then(addAllDogsToDogBar);
}

function toggleFilterDogs(e) {
    const filterDogsButton = document.querySelector("#good-dog-filter");
    if (filterDogsButton.innerText.includes("OFF")) {
      filterDogsButton.innerText = "Filter good dogs: ON";
      updateDogBar();
    } else {
      filterDogsButton.innerText = "Filter good dogs: OFF";
      updateDogBar();
    }
  }

  function addAllDogsToDogBar(dogArray, filter = false) {
    const dogBar = document.querySelector("#dog-bar");
    dogBar.innerHTML = "";
    if (filter) {
      dogArray.filter((dog) => dog.isGoodDog).forEach(addDogSpantoDogBar);
    } else {
      dogArray.forEach(addDogSpantoDogBar);
    }
  }

  