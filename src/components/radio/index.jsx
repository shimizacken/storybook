import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.scss';

export default class RadioButton extends Component {
  
    render() {
    
        const { text, id, name, dataCy, className, style } = this.props;

        return (
            <label className={classNames(
                    styles.container
                )}
            >
                <span className={classNames(styles.text)}>
                    {text}
                </span>
                <input type='radio' name={name} />
                <span className={classNames(styles.checkmark)}></span>
            </label>
        );
    }
}