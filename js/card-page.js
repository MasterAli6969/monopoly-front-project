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

const buttonAddCart = document
  .querySelector("._buttonAddCart")
  .addEventListener("click", () => {
    const cartIconNumber = document.querySelector("#cartIconNumber");
    let parsNumCartIconNumber = parseInt(cartIconNumber.innerText);
    if (parsNumCartIconNumber < 1) {
      parsNumCartIconNumber++;
      cartIconNumber.innerText = parsNumCartIconNumber;
    }
  });

// блок кода для трех якорных кнопок ведущих на аккардионы и их автоматическое открытие

const anchorButton = document
  .querySelectorAll("._anchorButton")
  .forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const targetSelector = button.getAttribute("data-bs-target");
      const accordionItem = document.getElementById(targetId);
      const targetCollapse = document.querySelector(targetSelector);
      if (accordionItem && targetCollapse) {
        accordionItem.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        const bsCollapse = new bootstrap.Collapse(targetCollapse);
        bsCollapse.toggle();
      }
    });
  });
