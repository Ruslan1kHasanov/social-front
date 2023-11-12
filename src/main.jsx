import ReactDOM from 'react-dom/client';
import './index.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
