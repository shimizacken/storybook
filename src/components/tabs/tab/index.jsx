import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.scss';

export default class Tab extends Component {
  
    onSelect = (e) => {

        this.props.onSelect(e, this.props.id);
    }

    render() {
    
        const { text, title, link, target, selected, className, style, 
                id, dataCy, disabled, onSelect } = this.props;

        const tabText = (link && !disabled) ? 
            <a href={link} target={target} title={title}>{text}</a>
                : <span title={title}>{this.props.text}</span>;

        const onClickEvent = disabled ? () => {} : this.onSelect;

        return (
            <div
                className={
                    classNames(
                        styles.tabRootWrapper,
                        selected && styles.selected,
                        disabled && styles.disabled,
                        className && className
                    )
                }
            style={style}
            onClick={onClickEvent}
            >
                {tabText}
            </div>
        );
    }
}

Tab.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    target: PropTypes.string,
    dataCy: PropTypes.string,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    onSelect: PropTypes.func
};