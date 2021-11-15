import React, { useEffect } from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './redux/store';


import './App.css';

const App = () => {
    return (
	<Provider store={store}>
      		<div className='App'>
          		<Routes/>
      		</div>
	</Provider>
    );
};

export default App;
