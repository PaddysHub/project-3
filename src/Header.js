// dependencies / things imported
import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';
// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class Header extends SimpleColors {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'Header';
  }

  constructor() {
    super();
    this.name = 'Perry';
  }

  static get properties() {
    return {
      ...super.properties,
      name: { type: String },
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
          background-color: var(--simple-colors-default-theme-accent-1);
          color: var(--simple-colors-default-theme-grey-12);
          font-family: Verdana, Geneva, Tahoma, sans-serif;
        }
      `,
    ];
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

// window.customElements.define(Header.tag, Header);
