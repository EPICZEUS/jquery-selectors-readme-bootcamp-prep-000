// declare your functions here...
function paragraphSelector() {
  return $("p");
}

function lastImageSelector() {
  const imgs = $("img");
  return imgs[imgs.length - 1];
}

function ninjaBabySelector() {
  return $("#baby-ninja");
}

function divSelector() {
  return $(".pics");
}

function firstListItem() {
  return $("ul#pic-list");
}