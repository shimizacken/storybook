import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RadioButton from '../src/components/radio';

storiesOf('Radio Button', module)
  .add('default', () => (
    <div>
        <RadioButton name='radio' text='One' />
        <RadioButton name='radio' text='Two' />
        <RadioButton name='radio' text='Three' />
    </div>
  ))