const buttons = document.getElementsByClassName("number-item");

let btnArr = [];

// Rating Number
let ratingNum = 1;

// console.log(buttons);
// buttons.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     console.log(btn);
//   });
// });

for (let btn of buttons) {
  //   console.log(btn);
  btn.addEventListener("click", function () {
    if (btn.style.backgroundColor === "var(--Orange)") {
      btn.style.backgroundColor = "rgba(80, 85, 92, 0.4)";
      btn.style.transition = "all 0.3s";
    } else {
      //   console.log(btn);

      btn.style.backgroundColor = "var(--Orange)";
      btn.style.hover = "var(--Light-Grey)";
      btn.style.transition = "all 0.3s";
    }
  });

  btnArr.push(btn);
}

// console.log("-------------");
btnArr.map((btn, i, arr) => {
  btn.addEventListener("mouseover", function () {
    // console.log(btn);
    if (btn.style.backgroundColor === "var(--Orange)") {
      return;
    } else {
      btn.style.backgroundColor = "var(--Light-Grey)";
    }
  });
  btn.addEventListener("mouseout", function () {
    // console.log(btn);
    if (btn.style.backgroundColor === "var(--Light-Grey)") {
      btn.style.backgroundColor = "rgba(80, 85, 92, 0.4)";
    }
  });
});

// BTN
// keydown
const btn = document.getElementsByClassName("btn")[0];
const mainContainer = document.getElementsByClassName("main-container")[0];

let submitFunc = function (e) {
//   console.log(e);
  {
    let seeIfMoreThanOne = [];
    btnArr.map((btn, i) => {
      if (btn.style.backgroundColor === "var(--Orange)") {
        seeIfMoreThanOne.push("yes");
        // console.log(ratingNum);
        ratingNum = i + 1;
        return;
      }
    });
    // console.log(seeIfMoreThanOne);

    if (seeIfMoreThanOne.length === 1) {
      mainContainer.innerHTML = " ";
      const newContainer = `<div class="thankUMainContainer">
      <img class="thankuImg" src="./images/illustration-thank-you.svg" />
      <p class="answer">You selected ${ratingNum} out of 5</p>
      <div class="description-container-thanku">
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
        </p>
      
      </div>
      </div>`;
      mainContainer.innerHTML = newContainer;
    } else if (seeIfMoreThanOne.length === 0) {
      prompt("Please select a rating from the given range");
    } else {
      prompt(
        "You are only allowed to select and send one rating so de-select some"
      );
    }
  }
};

btn.addEventListener("click", submitFunc);
document.addEventListener("keydown", function (e) {
//   console.log(e.keyCode);
  if (e.keyCode === 13) {
    submitFunc();
  }
});
