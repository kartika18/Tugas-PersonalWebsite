function findParentWithId(element, id) {
  while (element.parentElement) {
    if (element.parentElement.id === id) {
      return element.parentElement;
    } else {
      element = element.parentElement;
    }
  }
  return null;
}

function toogleDetail(e) {
  const target = e.target;
  const parent = findParentWithId(target, "exp-detail");
  const child = parent.querySelector("#exp-content");

  if (window.getComputedStyle(child).display === "none") {
    child.style.display = "flex";
    child.style.height = "auto";
    target.innerHTML = "Less Info";
    target.classList.add("active");
  } else {
    child.style.display = "none";
    child.style.height = "0";
    target.innerHTML = "More Info";
    target.classList.remove("active");
  }
}
