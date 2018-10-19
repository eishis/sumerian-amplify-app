import React, { Component } from 'react';
import { XR } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';

import './App.css';
import sceneConfig from './sumerian-exports';

XR.configure({ // XR category configuration
  SumerianProvider: { // Sumerian specific configuration
    region: 'ap-northeast-1', // Sumerian region
    scenes: { 
      scene1: { sceneConfig }
    },
  }
});
class App extends Component {
  async componentDidMount() {
    await XR.loadScene('scene1', 'sumerian-scene-dom-id');
    XR.start('scene1');
    if (XR.isVRCapable('scene1')) {
      XR.enterVR('scene1')
    }
  }

  render() {
    return (
      <div className="App">
        <div id="sumerian-scene-dom-id"></div>
      </div>
    );
  }
}

export default withAuthenticator(App, { includeGreetings: true });
