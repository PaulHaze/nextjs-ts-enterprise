import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CatCard, CatCardProps } from './CatCard';

import { mockCatCardProps } from './CatCard.mocks';

export default {
  title: 'cards/CatCard',
  component: CatCard,
  argTypes: {},
} as ComponentMeta<typeof CatCard>;

const Template: ComponentStory<typeof CatCard> = (args) => (
  <CatCard {...args} />
);

export const CatBase = Template.bind({});

CatBase.args = {
  ...mockCatCardProps.base,
} as CatCardProps;
