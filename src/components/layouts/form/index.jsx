import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.scss';

export class Row extends Component {
  
    render() {
    
        const { children } = this.props;

        return (
            <div
                className={classNames(styles.formRow)}
            >
                {
                    children
                }
            </div>
        );
    }
}