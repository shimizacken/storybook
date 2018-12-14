import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from './index';
import { ThreeDotsLoader } from '../../loaders';

describe('simple button test suite', () => {

    describe('button text', () => {


        it('should render', () => {

            const wrapper = shallow(<Button />);
    
            expect(wrapper).toMatchSnapshot();
        });
    
        it('should render text', () => {
    
            const text = 'Save';
    
            const wrapper = shallow(<Button>{text}</Button>);
            
            expect(wrapper).toMatchSnapshot();
        });
    
        it('should update text', () => {
    
            const text = 'Save';
    
            const wrapper = shallow(<Button>{text}</Button>);
            
            //console.log(wrapper.html());
    
            wrapper.setProps({
                children: 'Continue'
            });
    
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('button attributes', () => {

        it('render id attribute', () => {

            const text = 'Save', id = 'btnSave';

            const wrapper = shallow(<Button id={id}>{text}</Button>);
            
            //expect(wrapper.find('button').prop('id')).toBe(id);
            expect(wrapper).toMatchSnapshot();
        });

        it('render data-cy attribute', () => {

            const text = 'Save', id = 'btnSave', dataCy = 'data-cy';

            const wrapper = shallow(<Button 
                                        id={id}
                                        dataCy={dataCy}
                                    >
                                        {text}
                                    </Button>);
            
            //expect(wrapper.find('button').prop('data-cy')).toBe(dataCy);
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('states of the button', () => {

        it('render disabled', () => {

            const text = 'Save', id = 'btnSave', dataCy = 'data-cy';

            const wrapper = shallow(<Button 
                                        id={id}
                                        dataCy={dataCy}
                                        disabled
                                    >
                                        {text}
                                    </Button>);
            
            //expect(wrapper.hasClass('disabled')).toBeTruthy();
            expect(wrapper).toMatchSnapshot();
        });

        it('render inProgress', () => {

            const text = 'Save', id = 'btnSave', dataCy = 'data-cy';

            const wrapper = shallow(<Button 
                                        id={id}
                                        dataCy={dataCy}
                                        inProgress
                                    >
                                        {text}
                                    </Button>);
            
            //console.log(wrapper.text());
            //expect(wrapper.hasClass('disabled')).toBeTruthy();
            //expect(wrapper.find(ThreeDotsLoader).exists()).toBeTruthy();
            expect(wrapper).toMatchSnapshot();
        });
    });
});