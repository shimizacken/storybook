import React from 'react';

const auth = (props) => WrappedComponent => {
    
    return class extends React.Component {

        render() {
        
            console.log(...this.props)

            if(this.props.permision == false) {
                
                return null;
            }

            return(
                <WrappedComponent {...this.props} />
            );
        }
    }    
}

export default auth;