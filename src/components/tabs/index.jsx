import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.scss';

export default class Tabs extends Component {
  
    render() {
    
        const { className, style, children, id } = this.props;

        return (
            <div>
                <div
                    className={
                        classNames(
                            styles.tabsRootWrapper,
                            className && className
                        )
                    }
                style={style}
                >
                    {
                        this.props.children
                    }
                </div>
                
                    {
                        React.Children.map(children, (tab, i) => {

                            return  (tab.props.selected && tab.props.children) ? 
                                        <div className={classNames(styles.tabsContent)}>
                                            {tab.props.children}
                                        </div>  
                                            : null;
                        })
                    }
                
            </div>
        );
    }
}