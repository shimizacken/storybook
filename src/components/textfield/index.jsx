import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.scss';

export default class Textfield extends Component {
  
    state = {
        focus: false
    };

    noop = () => {};

    feildFocus = (e) => {

        this.setState({
            focus: true
        });
    }

    feildBlur = (e) => {

        this.setState({
            focus: false
        });
    }

    render() {
    
        const { value, placeholder, onChange, id, dataCy, errorMessage,
                disabled, inProgress, type, style, className, width, helptooltip } = this.props;

        const textType = type ? type : 'text';
        const isError = (errorMessage != '' && errorMessage != undefined) ? true : false;

        let cleanWidth =  parseInt(width);
        let customWidth = width ? `${parseInt(cleanWidth) - 30}px` : '100%';

        let rootWidth = width ? `${parseInt(cleanWidth)}px` : '100%';

        let customStyle;

        if (style) {
            
            customStyle = style;
        }
        else {
            customStyle = {
                width: customWidth 
            }
        }

        return (
            <div 
                className={classNames(styles.root)}
                style={{width: rootWidth}}>
                
                <div className={classNames(styles.textField,
                    className && className,
                    isError && styles.error,
                    this.state.focus && styles.focus,
                    disabled && styles.disabled)}
                    style={customStyle}>
                    <input
                        id={id}
                        data-cy={dataCy}
                        className={
                            classNames(styles.input)
                        }
                        disabled={disabled}
                        type={textType}
                        placeholder={placeholder}
                        value={value} 
                        onChange={onChange}
                        onFocus={this.feildFocus}
                        onBlur={this.feildBlur}
                    />
                    {
                        helptooltip ? <div className={classNames(styles.helptooltip)}><span>?</span></div> : null
                    }
                </div>
                {
                    isError ?
                        <div className={classNames(styles.errorMessage)}>
                            {errorMessage}
                        </div>
                            : null
                }
            </div>
        );
    }
}

Textfield.propTypes = {
    width: PropTypes.number
};