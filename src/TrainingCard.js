// dependencies / things imported
import { LitElement, html, css } from 'lit';

// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class TrainingCard extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'rename-me';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    this.cardData = [
      {
        name: 'Ethan',
        image:
          'https://img.dtcn.com/image/themanual/bill-murray-in-his-william-murray-gofl-clothing-768x460.jpg',
        age: '20',
        power: '85',
        speed: '99',
      },
    ];
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      need: { type: String, reflect: true },
      cardData: { type: Array },
    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'need' && this[propName] === 'andrew') {
        this.cardData = [
          {
            name: 'Andrew',
            image:
              'https://i.pinimg.com/564x/47/a6/80/47a6801c4fa9a70279f5b71d35567303.jpg',
            age: '21',
            power: '99',
            speed: '99',
          },
        ];
      }
      if (propName === 'need' && this[propName] === 'perry') {
        this.cardData = [
          {
            name: 'Perry',
            image:
              'https://imagez.tmz.com/image/67/o/2021/12/10/67bdbda0b8dc4972b2b0e82402bf94f1_md.jpg',
            age: '23',
            power: '50',
            speed: '78',
          },
        ];
      }

      if (propName === 'need' && this[propName] === 'khory') {
        this.cardData = [
          {
            name: 'Khory',
            image:
              'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fdarrahbrustein%2Ffiles%2F2019%2F01%2FShaq-Headshot-1-1200x900.jpg',
            age: 'tbd',
            power: 'tbd',
            speed: 'tbd',
          },
        ];
      }
    });
  }

  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }

  // HTMLElement life-cycle, element has been connected to the page / added or moved
  // this fires EVERY time the element is moved
  connectedCallback() {
    super.connectedCallback();
  }

  // HTMLElement life-cycle, element has been removed from the page OR moved
  // this fires every time the element moves
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  // CSS - specific to Lit
  static get styles() {
    return css`
      :host {
        display: block;
        border: 4px solid #8b8b8b;
        margin-bottom: 20px;
      }
      :host([need='joy']) {
        color: yellow;
        background-color: black;
      }

      :host([need='andrew']) {
        color: white;
        background-color: green;
      }

      :host([need='perry']) {
        color: orange;
        background-color: brown;
      }

      :host([need='khory']) {
        color: white;
        background-color: blue;
      }

      img {
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 5px;
        width: 100px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 20%;
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
    return new URL(`../lib/rename-me.haxProperties.json`, import.meta.url).href;
  }
}
