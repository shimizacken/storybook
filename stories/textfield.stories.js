import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Textfield from '../src/components/textfield';
import { Row } from '../src/components/layouts/form';
import Button from '../src/components/buttons/simple';
import { ResizeDecorator } from './decotators/resize';

storiesOf('Textfield', module)
  //.addDecorator(ResizeDecorator)
  .add('default', () => (
    <Textfield />
  ))
  .add('placeholder', () => (
    <Textfield
        placeholder='Please fill username'
    />
  ))
  .add('disabled', () => (
    <Textfield
        placeholder='Please fill username'
        disabled
    />
  ))
  .add('custom width', () => (
    <Textfield
        placeholder='Please fill username'
        width={200}
    />
  ))
  .add('type: password', () => (
    <Textfield
        placeholder='Please fill password'
        type='password'
    />
  ))
  .add('type: email', () => (
    <Textfield
        placeholder='Please fill email'
        type='email'
    />
  ))
  .add('error', () => (
    <Textfield
        placeholder='Please fill your name'
        errorMessage='required filed'
    />
  ))
  .add('custom style', () => (
    <Textfield
        placeholder='Please fill your name'
        style={{
            border: '1px solid orange',
            color: 'green'
        }}
    />
  ))
  .add('custom class', () => (
    <Textfield
        placeholder='Please fill your name'
        style={{
            border: '1px solid orange',
            color: 'green'
        }}
    />
  ))
  .add('help tooltip', () => (
    <Textfield
        placeholder='Please fill your name'
        helptooltip='last name is required filed'
        width={260}
    />
  ))
  .add('form', () => {

    const style = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '550px'
    };

    return <form>
                <Row>
                    <Textfield
                        placeholder='first name'
                        width={260}
                    />
                    <Textfield
                        placeholder='last name'
                        width={260}
                        errorMessage='required filed required filed required filed required filed required filed'
                        helptooltip='last name is required filed'
                    />
                </Row>
                <Row>
                    <Textfield
                        placeholder='email'
                        width={260}
                    />
                    <div style={{width: '260px'}}>
                        <Textfield
                            placeholder='age'
                            width={70}
                        />
                    </div>
                </Row>
                <Row>
                    <Textfield
                        placeholder='password'
                        type='password'
                        width={260}
                        errorMessage='invalid password'
                    />
                    <Textfield
                        placeholder='retype password'
                        type='password'
                        width={260}
                    />
                </Row>
                <Row>
                    <Button>
                        Submit
                    </Button>
                </Row>
            </form>
  })
  ;