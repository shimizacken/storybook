import { configure } from '@storybook/react';
import '../src/styles/fonts.scss';
import '../src/styles/customs.scss';

const excludedList = [

];

const req = require.context('../stories', true, /.stories.(js|jsx)$/);

function loadStories() {

    req.keys()
        .filter(story => excludedList.includes(story) == false)
        .forEach(filename => req(filename));
}

configure(loadStories, module);