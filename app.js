"use strict";

// UI ELEMENT
const container = document.querySelector(".container");
const loaderEL = document.querySelector(".loader");
const adviceIdEL = document.querySelector(".advice-id");
const adviceContent = document.querySelector(".advice-content");
const btn = document.querySelector(".btn");

// FUNCTIONS

function loader() {
  loaderEL.hidden = false;
  container.style.visibility = "hidden";
}

function completeLoading() {
  loaderEL.hidden = true;
  container.style.visibility = "visible";
}

// ADVIC FROM https://api.adviceslip.com/

function advicefromApi() {
  // loading
  loader();
  // endpoint
  const endpoint = "https://api.adviceslip.com/advice";

  fetch(endpoint)
    .then((res) => {
      return res.json();
    })
    .then((adviceData) => {
      const {
        slip: { advice, id },
      } = adviceData;

      adviceContent.textContent = `"${advice}"`;
      adviceIdEL.textContent = `#${id}`;
      completeLoading();
    });
}

// EVENTLISTNER
btn.addEventListener("click", advicefromApi);

advicefromApi();
