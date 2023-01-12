import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import About from './pages/About';
import Home from './pages/Home';
import GoHome from './pages/GoHome';
import NotFound from './pages/NotFound';
import ErrorComponent from './Components/ErrorComponent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
        errorElement: <ErrorComponent />,
      },
      {
        path: 'gohome',
        element: <GoHome />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
