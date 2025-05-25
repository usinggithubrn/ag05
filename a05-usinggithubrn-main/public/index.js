import App from "./app.js";

const main = () => {
  let app = new App();


  /* You can add cards to the board here so you don't
  have to type them all in every time the page refreshes.
  Here are a few examples: */
  app.addCard("doing", "Write Card class", "lightblue");
  app.addCard("todo", "Write App class", "khaki");
  let card = app.addCard("todo", "Test everything!", "pink");
  card.setDescription("Hopefully we've been testing throughout the process...");

  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("cardTitle").value;
    const color = document.getElementById("cardColor").value;

    app.addCard("todo", title, color);
    event.target.reset();

  });
};

main();
