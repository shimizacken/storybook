import React, { Component } from 'react';
import Tabs from '../../../src/components/tabs';
import Tab from '../../../src/components/tabs/tab';
import TabContent from './tabContent';
import auth from './auth';

const AuthTab = auth()(Tab);

const tabs = [
    {
        id: 1,
        text: 'Home',
        disabled: false,
        content: <TabContent title='Home' />,
        permision: true
    },
    {
        id: 2,
        text: 'Me',
        disabled: false,
        content: <TabContent title='Me' />,
        permision: false
    },
    {
        id: 3,
        text: 'Teams',
        disabled: true,
        content: <TabContent title='Teams' />,
        permision: true
    },
    {
        id: 4,
        text: 'Org Chart',
        disabled: false,
        content: <TabContent title='Org Chart' />,
        permision: true
    },
    {
        id: 5,
        text: 'Members',
        disabled: false,
        content: <TabContent title='Members' />,
        permision: true
    }
];

export default class TabsContainer extends Component {

    state = {
        selectedTabId: 1
    }

    onSelect = (e, id) => {

        this.setState({
            selectedTabId: id
        });
        console.log(`Tab ${id} selected`);
    }

    render() {

        return(
            <Tabs>
                {
                    tabs.map((tab) => {
                        
                        return <AuthTab 
                                    key={tab.id}
                                    id={`${tab.id}`} 
                                    text={tab.text} 
                                    onSelect={this.onSelect} 
                                    selected={this.state.selectedTabId == tab.id}
                                    disabled={tab.disabled}
                                    permision={tab.permision}
                                >
                                    {tab.content}
                                </AuthTab>
                    })
                }
            </Tabs>
        );
    }
  }