import { html } from 'lit';
import '../trading-card.js';

export default {
  title: 'Trading card',
  component: 'trading-card',
  argTypes: {
    need: { control: 'text' },
  },
};
function Template({ need = 'trading card', slot }) {
  return html` <trading-card need="${need}"> ${slot} </trading-card> `;
}
export const Card = Template.bind({});
export const TradeCard = Template.bind({});
export const TradeCard2 = Template.bind({});
export const TradeCard3 = Template.bind({});
export const TradeCard4 = Template.bind({});
TradeCard.args = {
  need: 'perry',
  slot: html`<p>card 1</p>`,
};
TradeCard2.args = {
  need: 'ethan',
  slot: html`<p>card 2</p>`,
};
TradeCard3.args = {
  need: 'andrew',
  slot: html`<p>card 3</p>`,
};
TradeCard4.args = {
  need: 'khory',
  slot: html`<p>card 4</p>`,
};
