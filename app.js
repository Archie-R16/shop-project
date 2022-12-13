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
