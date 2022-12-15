// add to cart

let productsCountEt = document.getElementById("products-count");

let addToCartBtns = document.querySelectorAll(".cart");

// for (let i = 0; i < addToCartBtns.length; i++) {
//   addToCartBtns[i].addEventListener("click", function () {
//     console.log("clicked");
//   });
// }

// addToCartBtns.forEach((item) =>
//   item.addEventListener("click", function () {
//     let prevProductsCount = +productsCountEt.textContent;
//     productsCountEt.textContent = prevProductsCount + 1;
//   })
// );

addToCartBtns.forEach((item) =>
  item.addEventListener("click", function () {
    productsCountEt.textContent = +productsCountEt.textContent + 1;
  })
);

let moreDetailsBtn = document.querySelectorAll(".more-deteils");
let model = document.querySelector(".model");
let btnClose = document.querySelector(".btn-close");

moreDetailsBtn.forEach((item) => item.addEventListener("click", openMoodel));

btnClose.addEventListener("click", closeModel);

function openMoodel() {
  model.classList.add("show");
  model.classList.remove("hide");
}

function closeModel() {
  model.classList.add("hide");
  model.classList.remove("show");
}

model.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target === model) {
    closeModel();
  }
});

// slider
$(".slaider-block").slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
});

// toogle like button state

let likeByns = document.querySelectorAll(".like");
// console.log(likeByns);

likeByns.forEach((item) =>
  item.addEventListener("click", function () {
    if (item.classList.contains("btn")) {
      item.classList.remove("btn");
    } else {
      item.classList.add("btn");
    }
  })
);
// show model by scroll

function showModaByScroll() {
  if (window.scrollY >= document.body.scrollHeight / 2) {
    openMoodel();
    window.removeEventListener("scroll", showModaByScroll);
  }
}

window.addEventListener("scroll", showModaByScroll);

// let audi = {
//   model:"A4",
//   year:"2012",
//   color:"blak"
// }

// let bmw = {
//   model:"328",
//   year:"2010",
//   color:"grey"
// }

// let lexus = {
//   model:"es250",
//   year:"2020",
//   color:"white"
// }

// function Car(model, year, color) {
//   this.model = model;
//   this.year = year;
//   this.color = color;
// }

// const audi = new Car("A4", "2022", "blak");

// const bmw = new Car("328", "2012", "white");

// const lexus = new Car("es250", "2012", "grey");

// console.log(audi);
// console.log(bmw);
// console.log(lexus);

let incrementBtns = document.querySelectorAll(".increment-btn");

let decrementBtns = document.querySelectorAll(".decrement-btn");

let inputFilds = document.querySelectorAll(".product-quantity input");

console.log(incrementBtns);
console.log(decrementBtns);
console.log(inputFilds);

function Couter(incrementBtns, decrementBtns, inputFilds) {}
