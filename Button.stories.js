import Button from './Button';
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Button', module)
  .add('without props', () => <Button>Click Me!</Button>)
  .add('with some props', () => <Button>Click Me!</Button>);