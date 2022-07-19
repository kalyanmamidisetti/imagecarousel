document.querySelectorAll(".carousel").forEach((Carousel) => {
  const items = Carousel.querySelectorAll(".carousel_item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel_button"></span>`;
  });

  Carousel.insertAdjacentHTML(
    "beforeend",
    `
      <div class="carousel_nav">
      ${buttonsHtml.join("")}
      </div>
    `
  );

  const buttons = Carousel.querySelectorAll(".carousel_button");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      items.forEach((item) => item.classList.remove("carousel_item_selected"));
      buttons.forEach((button) =>
        button.classList.remove("carousel_button_selected")
      );

      items[i].classList.add("carousel_item_selected");
      buttons[i].classList.add("carousel_button_selected");
    });
  });
  items[0].classList.add("carousel_item_selected");
  buttons[0].classList.add("carousel_button_selected");
});
