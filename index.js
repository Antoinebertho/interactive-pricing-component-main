let rangeSlider = document.getElementById("#slider");
let priceRange = document.getElementsByClassName(".money");
let pageViews = document.getElementById("#page-views");
let checkbox = document.getElementById("#switch");

function checkIfBargain() {
  if (slider.value == 0) {
    if (checkbox.checked) {
      priceRange.textContent = "$" + (8-(25*8/100));
    } else {
      priceRange.textContent = "$8";
    }
    pageViews.textContent = "10K PAGEVIEWS";
  } else if (slider.value == 25) {
    if (checkbox.checked) {
      priceRange.textContent = "$" + (12-(50*12/100));
    } else {
      priceRange.textContent = "$12";
    }
    pageViews.textContent = "50K PAGEVIEWS";
  } else if (slider.value == 50) {
    if (checkbox.checked) {
      priceRange.textContent = "$" + (16-(50*16/100));
    } else {
      priceRange.textContent = "$16";
    }
    pageViews.textContent = "100K PAGEVIEWS";
  } else if (slider.value == 75) {
    if (checkbox.checked) {
      priceRange.textContent = "$" + (24-(50*24/100));
    } else {
      priceRange.textContent = "$24";
    }
    pageViews.textContent = "500K PAGEVIEWS";
  } else if (slider.value == 100) {
    if (checkbox.checked) {
      priceRange.textContent = "$" + (36-(50*36/100));
    } else {
      priceRange.textContent = "$36";
    }
    pageViews.textContent = "1M PAGEVIEWS";
  }
};
