// блок кода для добавления нескольких товаров - 1 +
const cardPage = document.querySelectorAll("._cardPage");
cardPage.forEach((card) => {
  const quantityProducts = card.querySelector("._quantityProducts");
  const addRemoveButtons = card.querySelectorAll(
    "._removeDuplicateProducts, ._addDuplicateProducts"
  );

  addRemoveButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let parsNumQuantityProducts = parseInt(quantityProducts.innerText);

      if (
        (button.classList.contains("_removeDuplicateProducts") &&
          parsNumQuantityProducts > 1) ||
        (button.classList.contains("_addDuplicateProducts") &&
          parsNumQuantityProducts < 50)
      ) {
        if (button.classList.contains("_addDuplicateProducts")) {
          parsNumQuantityProducts++;
        } else {
          parsNumQuantityProducts--;
        }
        quantityProducts.innerText = parsNumQuantityProducts;
      }
    });
  });
});

// блок кода для счётчика на карзину, ограничитель на однокротное добавление

const buttonAddCart = document.querySelector("._buttonAddCart");
const cartIconNumber = document.querySelector("#_cartIconNumber");
buttonAddCart.addEventListener("click", () => {
  let parsNumCartIconNumber = parseInt(cartIconNumber.innerText);
  if (parsNumCartIconNumber < 1) {
    parsNumCartIconNumber++;
    cartIconNumber.innerText = parsNumCartIconNumber;
  }
});
