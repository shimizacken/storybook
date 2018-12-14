import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ThreeDotsLoader } from '../../loaders';
import styles from './style.scss';

export default class Button extends Component {
  
    noop = () => {};

    render() {
    
        const { children, onClick, disabled, inProgress, style, id, dataCy } = this.props;

        return (
            <button
                id={id}
                data-cy={dataCy}
                style={style}
                className={
                    classNames(
                        styles.simpleButton,
                        disabled && styles.disabled,
                        inProgress && styles.disabled)
                }
                onClick={
                    disabled || inProgress ? this.noop : onClick
                }
            >
                {
                    inProgress ? <ThreeDotsLoader width='15px' height='15px' /> : children
                }
            </button>
        );
    }
}

// Button.PropTypes = {
//     className: PropTypes.string
// };