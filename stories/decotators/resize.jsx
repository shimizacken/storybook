import React, { Component } from 'react';
import { StoryDecorator } from '@storybook/react';

const resizeDecorator = {
    width: '60vw',
    height: 295,
    border: '1px solid gray',
    padding: 10,
    maxWidth: '100vw',
    maxHeight: '100vh',
    resize: 'both',
    overflow: 'auto'
};

const ResizeDecorator = (story) => (
    <div style={resizeDecorator}>
        {story()}
    </div>
)

export default ResizeDecorator;