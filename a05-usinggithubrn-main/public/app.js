import Card from "./card.js";
import Mover from "./mover.js";

export default class App {
  constructor() {
    this.mover = new Mover();
  }

  addCard(col, title, color) {
    const card = new Card(title, color);
    const colElem = document.getElementById(col);
    card.addToCol(colElem, this.mover);
    return card;
  }

  //TODO
}
