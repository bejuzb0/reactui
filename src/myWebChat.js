import { DirectLine } from 'botframework-directlinejs';
import React from 'react';
import ReactWebChat from 'botframework-webchat';


class myWebChat extends React.Component {
    constructor(props) {
        super(props);
    
        this.directLine = new DirectLine({ token: this.props.token });
      }
    render() {
        return (
            <ReactWebChat directLine={ this.directLine }  />
          );
    }
}

export default myWebChat
