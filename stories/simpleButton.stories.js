import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../src/components/buttons/simple';

storiesOf('Button', module)
  .add('default', () => (
    <Button
    >
        Simple Button
    </Button>
  ))
  .add('with emoji', () => (
    <Button
    >
        <span role="img" aria-label="so cool">😀 😎 👍 💯</span>
    </Button>
  ))
  .add('disabled', () => (
    <Button
        disabled
        onClick={action('clicked!')}
    >
        i'm disable
    </Button>
  ))
  .add('loader', () => (
    <Button
        inProgress
        onClick={action('clicked!')}
    >
        i'm disable
    </Button>
  ))
  .add('click', () => (
    <Button
        onClick={action('clicked!')}
    >
        click me!
    </Button>
  ));   