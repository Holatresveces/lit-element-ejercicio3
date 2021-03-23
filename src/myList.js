import { LitElement, html } from "lit-element";

class MyList extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      list: { type: Array },
    };
  }

  constructor() {
    super();
    this.title = "";
    this.list = [];
  }

  render() {
    return html`
      <h1>${this.title}</h1>
      ${this.list.length ? this._getListItems() : "No hay datos"}
    `;
  }

  _getListItems() {
    return html`
      <ul>
        ${this.list.map((item) => {
          return html` <li>${item.name} (${item.year})</li> `;
        })}
      </ul>
    `;
  }
}

customElements.define("my-list", MyList);
