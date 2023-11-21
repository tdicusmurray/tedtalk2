// Button.stories.js

import React from 'react';
import Button from '../Button'; // Import your Button component

export default {
  title: 'Button', // The title of your component in Storybook
  component: Button, // The component you want to showcase
};

// Define different stories for your component
export const Primary = () => <Button primary>Primary Button</Button>;
export const Secondary = () => <Button secondary>Secondary Button</Button>;