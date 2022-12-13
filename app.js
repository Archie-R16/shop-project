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
$(".slaider-block").slick();
