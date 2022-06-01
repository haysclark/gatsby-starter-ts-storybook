import { ComponentMeta, Story } from '@storybook/react';

import NavButton from './NavButton';

export default {
  Home: `Components/NavButton`,
  component: NavButton,
  argTypes: {
    children: {
      control: `text`,
    },
    path: {
      control: `text`,
    },
  },
} as ComponentMeta<typeof NavButton>;

const Template: Story = ({ children, ...rest }) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <NavButton {...rest}>{children}</NavButton>
);

export const Simple = Template.bind({});
Simple.args = {
  children: `some child text`,
  path: `/example`,
};
