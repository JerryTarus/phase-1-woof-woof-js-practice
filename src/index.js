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

  function addDogSpantoDogBar(dog) {
    const dogBar = document.querySelector("#dog-bar");
    const dogSpan = document.createElement("span");
    dogSpan.innerText = dog.name;
    dogSpan.dataset.id = dog.id;
  
    dogSpan.addEventListener("click", onDogSpanClick);
  
    dogBar.append(dogSpan);
  }
  
  function onDogSpanClick(e) {
    getSingleDog(e.target.dataset.id).then(addDogInfoToPage);
  }
  

  function addDogInfoToPage(dog) {
    const dogInfo = document.querySelector("#dog-info");
    dogInfo.innerHTML = "";
    const dogImg = document.createElement("img");
    dogImg.src = dog.image;
  
    const dogTitle = document.createElement("h2");
    dogTitle.innerText = dog.name;
  
    const dogButton = document.createElement("button");
    dogButton.innerText = dog.isGoodDog ? "Good Dog!" : "Bad Dog!";
    dogButton.dataset.id = dog.id;
    dogButton.addEventListener("click", onGoodDogButtonClick);
  
    dogInfo.append(dogImg, dogTitle, dogButton);
  }

  