const NO_DESCRIPTION_TEXT = "(No description)";

export default class Card {
  constructor(title, color) {
    const template = document.querySelector(".card.template");
    this.elem = template.cloneNode(true);
    this.elem.classList.remove("template"); 

    this.elem.querySelector(".title").textContent = title;
    this.elem.style.backgroundColor = color;

    this.setDescription("");

    //task2 stuff//

    const descElem = this.elem.querySelector(".description");
    const textarea = this.elem.querySelector(".editDescription");

    this.elem.querySelector(".delete").addEventListener("click", () => {
      this.elem.remove();
    });

    this.elem.querySelector(".edit").addEventListener("click", () => {
      textarea.classList.remove("hidden");
      descElem.classList.add("hidden");

      textarea.value = descElem.textContent === NO_DESCRIPTION_TEXT ? "" : descElem.textContent;
      textarea.focus();
      textarea.select();
    });

    textarea.addEventListener("blur", () => {
      this.setDescription(textarea.value);
      textarea.classList.add("hidden");
      descElem.classList.remove("hidden");
    });
  }

  addToCol(colElem, mover) {
    colElem.appendChild(this.elem);

    if(mover) {
      this.elem.querySelector(".startMove").addEventListener("click", () => {
        mover.startMoving(this.elem);
      })
    }
  }

  setDescription(text) {
    const descElem = this.elem.querySelector(".description");
    if (!text) {
      descElem.textContent = NO_DESCRIPTION_TEXT;
    } else {
      descElem.textContent = text;
    }
  }
}
