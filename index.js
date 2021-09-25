const api = "https://api.genderize.io?name=";
const thename = document.querySelector(".user-name");
const guessBtn = document.querySelector(".guess-btn");
const genderResult = document.querySelector(".gender");

guessBtn.addEventListener("click", function () {
  fetch(api + thename.value)
    .then((res) => res.json())
    .then((data) => {
      genderResult.textContent = "";
      genderResult.classList.add("loader");
      setTimeout(function () {
        genderResult.classList.remove("loader");
      }, 1500);
      if (data.gender === null) {
        setTimeout(function () {
          genderResult.textContent =
            "Sorry, We don't think this is the name. 🙏";
        }, 1600);
      } else {
        setTimeout(function () {
          genderResult.textContent = `🎉${data.gender.toUpperCase()}🎉`;
        }, 1600);
      }
    });
});
