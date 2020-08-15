import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer';

function App() {
  return (
    //Provide access to the store for all components
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
