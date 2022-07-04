import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainLayout, MainLayoutProps } from './MainLayout';

import { mockMainLayoutProps } from './MainLayout.mocks';

export default {
  title: 'layouts/MainLayout',
  component: MainLayout,
  argTypes: {},
} as ComponentMeta<typeof MainLayout>;

const Template: ComponentStory<typeof MainLayout> = (args) => (
  <MainLayout {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockMainLayoutProps.base,
} as MainLayoutProps;
