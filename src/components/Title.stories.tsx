import { ComponentMeta, Story } from '@storybook/react';

import Title from './Title';

export default {
  title: `Components/Title`,
  component: Title,
  argTypes: {
    children: {
      control: `text`,
    },
  },
} as ComponentMeta<typeof Title>;

const Template: Story = ({ children, ...rest }) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <Title {...rest}>{children}</Title>
);

export const Simple = Template.bind({});
Simple.args = {
  children: `some child text`,
};
