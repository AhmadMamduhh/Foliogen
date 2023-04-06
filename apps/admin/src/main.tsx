import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the "app" root element');
const root = createRoot(rootElement);

root.render(
	<>
		<App />

		<ToastContainer
			toastStyle={{ fontSize: '1rem', color: 'white' }}
			theme="colored"
			position="top-right"
			autoClose={3000}
			newestOnTop
			closeOnClick
			pauseOnFocusLoss={false}
			draggable
			pauseOnHover={false}
		/>
	</>
);
