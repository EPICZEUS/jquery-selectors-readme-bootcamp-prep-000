// declare your functions here...
function paragraphSelector() {
  return $("p");
}

function lastImageSelector() {
  const imgs = $("img");
  return imgs[imgs.length - 1];
}