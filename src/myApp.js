import { LitElement, html } from "lit-element";
import "./myList";

class MyApp extends LitElement {
  static get properties() {
    return {
      list: { type: Array },
    };
  }

  constructor() {
    super();
    this.list = [];
  }

  render() {
    return html`
      <button @click=${this._onCreateList}>Create list</button>
      <button @click=${this._onEmptyList}>Empty list</button>
      <my-list title="My Favorite Movies" .list=${this.list}></my-list>
    `;
  }

  _onCreateList() {
    this.list = this._createNewList();
  }

  _createNewList() {
    const list = [
      {
        id: 1,
        name: "Arrival",
        year: 2016,
      },
      {
        id: 2,
        name: "Paprika",
        year: 2006,
      },
      {
        id: 3,
        name: "Airplane!",
        year: 1980,
      },
      {
        id: 4,
        name: "Jojo Rabbit",
        year: 2020,
      },
      {
        id: 5,
        name: "Ya no sé cuál poner",
        year: 2077,
      },
    ];

    return list;
  }

  _onEmptyList() {
    this.list = [];
  }
}

customElements.define("my-app", MyApp);
