import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithNotes } from '@storybook/addon-notes';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import { ResizeDecorator } from './decotators/resize';
import Tabs from '../src/components/tabs';
import Tab from '../src/components/tabs/tab';
import TabsContainer from './components/tabsContainer';

storiesOf('Tabs', module)
  .addDecorator(withKnobs)
  //.addDecorator(ResizeDecorator)
  .add('Default', () => (
    <WithNotes notes='Tabs'>
        <Tabs>
            <Tab text='Home'>
                <p>
                    dfsdfs dfsd fsdf sdf sdfsd
                </p>
            </Tab>
            <Tab text='Me' />
            <Tab text='Teams' />
            <Tab title='Organization chart' text='Org Chart' />
            <Tab text='Members' />
        </Tabs>
    </WithNotes>
  ))
  .add('Selected', () => (
    <Tabs>
        <Tab id='1' text='Home' />
        <Tab id='2' text='Me' />
        <Tab id='3' text='Teams' selected>
            {/* <TabContent title='Teams' /> */}
        </Tab>
        <Tab id='4' text='Org Chart'>
            <p>
                Orgchart content
            </p>
        </Tab>
        <Tab id='5' text='Members' />
    </Tabs>
  ))
  .add('Links', () => (
    <Tabs>
        <Tab text='Home' link='/#/' />
        <Tab text='Me' link='/#/me' target='_blank' />
        <Tab text='Teams' />
        <Tab text='Org Chart' selected />
        <Tab text='Members' />
    </Tabs>
  ))
  .add('Disabled', () => (
    <Tabs>
        <Tab text='Home' link='/#/' />
        <Tab text='Me' link='/#/me' target='_blank' />
        <Tab text={`I'm disabled!`} link='/#/' disabled onSelect={action('tab clicked!')} />
        <Tab text='Org Chart' selected />
        <Tab text='Members' />
    </Tabs>
  ))
  .add('OnSelect', () => (<TabsContainer />))
  .add('Custom styles', () => (
    <Tabs
        style={{
            backgroundColor: 'pink'
        }}
    >
        <Tab text='Home' link='/#/' />
        <Tab text='Me' link='/#/me' target='_blank' />
        <Tab style={{
            color: 'red',
            backgroundColor: '#bbb',
            fontSize: '10px'
        }} text={`I'm customized!`} />
        <Tab text='Org Chart' selected />
        <Tab text='Members' />
    </Tabs>
  ))
  .add('Custom class', () => (
    <Tabs
        className='my-tabs'
    >
        <Tab text='Home' link='/#/' />
        <Tab className='my-tab' text={`I'm customized!`} link='/#/me' target='_blank' />
        <Tab text='teams' />
        <Tab text='Org Chart' selected />
        <Tab text='Members' />
    </Tabs>
  ));