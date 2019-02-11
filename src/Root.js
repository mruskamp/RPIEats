import React from 'react'; 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import App from './App';
import RootReducer from './RootReducer';
import theme from './theme.js';

const rootTheme = createMuiTheme(theme);
const store = createStore(RootReducer, applyMiddleware(thunk));

const Root = (props) => (
	<Provider store={store}>
		<MuiThemeProvider theme={rootTheme} >
			<App />
		</MuiThemeProvider>
	</Provider>
)

export default Root;