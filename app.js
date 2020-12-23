let tabs = document.querySelectorAll(".tab-title-item");
let tabContent = document.querySelectorAll(".tab-content");
let tabWrap = document.querySelector(".tab-title-items");


function hideTabContent() {
  tabContent.forEach(tab => {
    tab.classList.add("hide");
    tab.classList.remove("show");
  })
}

function hideTabColor() {
  tabs.forEach(tab => {
    tab.classList.remove("tab-active-element");
  })
}

function showTabContent(item = 0) {
  tabContent[item].classList.add("show");
  tabContent[item].classList.remove("hide");
}

hideTabContent();
showTabContent();


tabWrap.addEventListener("click", function (e) {
  if (e.target.closest(`.tab-title-item`)) {
    let tabArray = Array.from(tabs);
    const Indx = tabArray.indexOf(e.target);
    hideTabColor();
    e.target.classList.toggle("tab-active-element");
    hideTabContent();
    showTabContent(Indx);
  }
})