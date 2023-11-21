// components/Button.stories.js

import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('Primary Button', () => <Button label="Primary Button" />)
  .add('Secondary Button', () => <Button label="Secondary Button" />);
