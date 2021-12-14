// dependencies / things imported
import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';

// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class Data extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'data';
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      need: { type: String, reflect: true },
      characterData: { type: String },
    };
  }

  // CSS - specific to Lit
  static get styles() {
    return css`
      :host {
        display: flex;
        align-items: center;
        background-color: white;
        justify-content: left;
        height: 410px;
        width: 280px;
        margin: 10px;
      }

      .word {
        text-transform: uppercase;
        text-align: left;
        color: var(--simple-colors-default-theme-accent-7);
        margin: 0px;
        font-size: 12px;
      }

      .num {
        text-transform: uppercase;
        text-align: right;
        color: var(--simple-colors-default-theme-accent-7);
        margin: 0px;
        font-size: 12px;
      }
    `;
  }

  // HTML - specific to Lit
  render() {
    return html`
      <ul>
        ${this.cardData.map(
          item =>
            html`<h1>${item.name}</h1>
              <img src=${item.image} alt="characterIcon" />
              <div>Age ${item.age}</div>
              <div>Power ${item.power}</div>
              <div>Speed ${item.speed}</div>`
        )}
      </ul>
      <slot></slot>
    `;
  }

  // HAX specific callback
  // This teaches HAX how to edit and work with your web component
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`../lib/trading-card.haxProperties.json`, import.meta.url)
      .href;
  }
}
