// блок кода для добавления нескольких товаров - 1 + и увеличение итоговой суммы за несколько таваров

const productsCounters = document.querySelectorAll("._productsCouter");

productsCounters.forEach((productCounter) => {
  const removeDuplicateProducts = productCounter.querySelector(
    "._removeDuplicateProducts"
  );
  const addDuplicateProducts = productCounter.querySelector(
    "._addDuplicateProducts"
  );
  const quantityProducts = productCounter.querySelector("._quantityProducts");
  const totalPrice = productCounter.querySelector("._totalPrice");
  const denomination = productCounter.querySelectorAll("._denomination");

  addDuplicateProducts.addEventListener("click", () => {
    let currentQuantity = parseInt(quantityProducts.innerText);
    let currentTotalPrice = parseInt(totalPrice.innerText);

    if (currentQuantity < 50) {
      currentQuantity++;
      currentTotalPrice += Array.from(denomination).reduce(
        (sum, item) => sum + parseInt(item.innerText),
        0
      );

      quantityProducts.innerText = currentQuantity;
      totalPrice.innerText = currentTotalPrice;
    }
  });

  removeDuplicateProducts.addEventListener("click", () => {
    let currentQuantity = parseInt(quantityProducts.innerText);
    let currentTotalPrice = parseInt(totalPrice.innerText);

    if (currentQuantity > 1) {
      currentQuantity--;
      currentTotalPrice -= Array.from(denomination).reduce(
        (sum, item) => sum + parseInt(item.innerText),
        0
      );

      quantityProducts.innerText = currentQuantity;
      totalPrice.innerText = currentTotalPrice;
    }
  });
});

const productsDelete = document.querySelectorAll("._productsDelete");

productsDelete.forEach((item) => {
  item.querySelector("._removeProduct").addEventListener("click", () => {
    if (item) {
      item.parentNode.removeChild(item);
    }
  });
});
