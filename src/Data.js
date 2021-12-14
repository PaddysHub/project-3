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
      attribute: { type: String },
    };
  }

  // CSS - specific to Lit
  static get styles() {
    return css`
      .word {
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
      <div>
        <slot> ${this.name} </slot>
      </div>
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
