/* Text to add to the move here button */
const MOVE_HERE_TEXT = "— Move here —";

export default class Mover {
  constructor() {
    this.card = null;
    this.handleMoveHere = this.handleMoveHere.bind(this);
  }

  startMoving(card) {
    this.stopMoving();
    this.card = card;
    this.card.classList.add("moving");
    
    const columns = document.querySelectorAll(".column");
    
    for (const col of columns) {
    
      const title = col.querySelector(".columnTitle");
      const buttonTop = this.createMoveHereButton();
      title.after(buttonTop);

      const cards = col.querySelectorAll(".card:not(.template)");
      for (const c of cards) {
        const btn = this.createMoveHereButton();
        c.after(btn);
      }
    }
  }

  stopMoving() {
    if (this.card) {
      this.card.classList.remove("moving");
      this.card = null;
    }
    document.querySelectorAll(".moveHere").forEach(btn => btn.remove());
  }

  createMoveHereButton() {
    const button = document.createElement("button");
    button.textContent = MOVE_HERE_TEXT;
    button.classList.add("moveHere");
    button.addEventListener("click", this.handleMoveHere);
  return button;
  }

  handleMoveHere(event) {
    if (!this.card) return;

    const button = event.currentTarget;
    button.before(this.card);
    this.stopMoving();
  }



  //TODO
}
