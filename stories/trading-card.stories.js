import { html } from 'lit';

import '../trading-card.js';

export default {
  title: 'Trading card',
  component: 'trading-card',
  argTypes: {
    need: { control: 'text' },
  },
};

function Template({ need = 'rename', slot }) {
  return html` <trading-card need="${need}"> ${slot} </trading-card> `;
}
export const Card = Template.bind({});

export const ScienceCard = Template.bind({});
ScienceCard.args = {
  need: 'science',
  slot: html`<p>slotted content that should render</p>`,
};
