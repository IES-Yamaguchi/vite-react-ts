import React from 'react';
import ReactDOM from 'react-dom/client';
import WeeklyReportPage from './components/WeeklyReportPage';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<WeeklyReportPage />
		</Provider>
	</React.StrictMode>
);
