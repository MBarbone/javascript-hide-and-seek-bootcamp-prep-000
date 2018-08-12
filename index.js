function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}

function increaseRankBy(n) {
  const rank = document.getElementByID("app").querySelectorAll("li.ranked-list li");
  
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML=parseInt(lis[i].innerHTML)+n;
  }
}