// dependencies / things imported
import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
import './Header.js';
// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class TrainingCard extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'trading-card';
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
    changedProperties.forEach((oldValue, card) => {
      if (card === 'need' && this[card] === 'ethan') {
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
      if (card === 'need' && this[card] === 'andrew') {
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
      if (card === 'need' && this[card] === 'perry') {
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

      if (card === 'need' && this[card] === 'khory') {
        this.cardData = [
          {
            name: 'Khory',
            image:
              'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fdarrahbrustein%2Ffiles%2F2019%2F01%2FShaq-Headshot-1-1200x900.jpg',
            age: '21',
            power: '75',
            speed: '80',
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
        height: 50%;
        width: 100%;
        padding: 5px;
      }

      :host([need='ethan']) {
        color: yellow;
        background-color: black;
        border: solid 5px yellow;
      }

      :host([need='andrew']) {
        color: white;
        background-color: green;
        border: solid 5px black;
      }

      :host([need='perry']) {
        color: orange;
        background-color: brown;
        border: solid 5px orange;
      }

      :host([need='khory']) {
        color: white;
        background-color: blue;
        border: solid 5px black;
      }

      img {
        padding: 5px;
        width: 98%;
        height: 250px;
        display: block;
        align-content: center;
      }
      body {
        font-family: Arial, Helvetica, sans-serif;
      }

      .flip-card {
        background-color: transparent;
        width: 100%;
        height: 500px;
        perspective: 1000px;
      }

      .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        line-height: 2.35;
      }

      .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
        cursor: pointer;
      }

      .flip-card-front,
      .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }

      .flip-card-back {
        background-image: url(assets/cardback.jpeg);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        color: white;
        transform: rotateY(180deg);
      }
    `;
  }

  // HTML - specific to Lit
  render() {
    return html`
      <slot>
        ${this.cardData.map(
          item =>
            html`
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <h1 style="text-align:center; border: 2px double white;">
                      ${item.name}
                    </h1>
                    <img src=${item.image} alt="characterIcon" />
                    <div style="text-align:left; border: 2px double white;">
                      <simple-icon-lite
                        icon="device:brightness-auto"
                      ></simple-icon-lite>
                      Age:
                      <span style="float:right;"> ${item.age} </span>
                    </div>
                    <div style="text-align:left; border: 2px double white;">
                      <simple-icon-lite
                        icon="places:fitness-center"
                      ></simple-icon-lite>
                      Power:
                      <span style="float:right;"> ${item.power} </span>
                    </div>
                    <div style="text-align:left;; border: 2px double white;">
                      <simple-icon-lite
                        icon="maps:directions-run"
                      ></simple-icon-lite>
                      Speed:
                      <span style="float:right;"> ${item.speed} </span>
                    </div>
                  </div>
                  <div class="flip-card-back">
                    <h1>Card made by:</h1>
                    <img src=${item.image} alt="characterIcon" />
                    <p>PaddysHub</p>
                  </div>
                </div>
              </div>
            `
        )}
      </slot>
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
